import { extendType, nonNull, objectType, stringArg } from "nexus";
import CompanyModel from "../mongo/CompanyModel";
import { NexusGenObjects } from "../../nexus-typegen";
import request, { gql } from "graphql-request";
import tickers from "../tickers";
import tempTickers from "./tempTickers";
require("dotenv").config();

const queryCompany = (ticker: string) => gql`
query Query {
  getCompanyInfo(ticker: "${ticker}") {
    success
    errors
    data {
      sector
      country
      full_time_employees
      compensation_risk
      audit_risk
      board_risk
      overall_risk
      long_business_summary
      city
      state
      website
    }
  }
}
`;

const queryHistoricalData = (ticker: string) => gql`
query Query {
  getHistoricalData(ticker: "${ticker}") {
    success
    errors
    data {
      date
      open
      high
      volume
    }
  }
}
`;

export const TempResolver = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("executeScript", {
      type: "Boolean",
      async resolve(parent, args, context) {
        try {
          for (const ticker of tempTickers) {
            const responseCompany = (
              await request(process.env.API_URL!, queryCompany(ticker))
            ).getCompanyInfo;

            const responseHistoricalData = (
              await request(process.env.API_URL!, queryHistoricalData(ticker))
            ).getHistoricalData;

            if (responseCompany.success && responseHistoricalData.success) {
              const dataCompany = responseCompany.data;

              const description = dataCompany.long_business_summary.substring(
                0,
                150
              );
              delete dataCompany.long_business_summary;

              const mongoCompany = new CompanyModel({
                _id: ticker,
                name: tickers[ticker],
                long_business_summary: description,
                ...dataCompany,
              });

              await mongoCompany.save();

              const created = await context.prisma.company.create({
                data: {
                  id: ticker,
                  name: tickers[ticker],
                  long_business_summary: description,
                  ...dataCompany,
                },
              });
              console.log(created);

              const data = responseHistoricalData.data;

              const foundCompany = await CompanyModel.findById(ticker);
              if (!foundCompany) {
                return new Error("La compañia no fue encontrada");
              }

              foundCompany.historical_data = data;
              await foundCompany.save();

              for (let i = 0; i < data.length; i++) {
                const created = await context.prisma.historicalData.create({
                  data: {
                    date: data[i].date,
                    high: data[i].high,
                    open: data[i].open,
                    volume: BigInt(data[i].volume),
                    companyId: ticker,
                  },
                });
                console.log(created);
              }

              return true;
            }
            console.log(responseHistoricalData.errors);
            console.log(responseCompany.errors);
            return false;
          }
        } catch (e) {
          console.log(e);
          return false;
        }
      },
    });
  },
});
