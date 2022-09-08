import { extendType, nonNull, objectType, stringArg } from "nexus";
import request, { gql } from "graphql-request";
import tickers from "../tickers";
import CompanyModel from "../mongo/CompanyModel";
require("dotenv").config();

export const HistoricalData = objectType({
  name: "HistoricalData",
  definition(t) {
    t.string("companyId");
    t.nonNull.float("open");
    t.nonNull.float("high");
    t.nonNull.string("volume");
    t.nonNull.string("date");
  },
});

const query = (ticker: string) => gql`
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

export const SQLHistoricalDataQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("sql_historical_data", {
      type: "HistoricalData",
      resolve(parent, args, context) {
        console.log(context.prisma.historicalData.findMany());
        return context.prisma.historicalData.findMany();
      },
    });
  },
});

export const HistoricalDataMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("addHistoricalData", {
      type: "Boolean",
      args: {
        ticker: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        try {
          const ticker = args.ticker.toUpperCase();

          const response = (await request(process.env.API_URL!, query(ticker)))
            .getHistoricalData;

          if (response.success) {
            const data = response.data;

            const foundCompany = await CompanyModel.findById(ticker);
            if (!foundCompany) {
              return new Error('El usuario no fue encontrado')
            }

            foundCompany.historical_data = data;
            await foundCompany.save()

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
          console.log(response.errors);
          return false;
        } catch (e) {
          console.log(e);
          return false;
        }
      },
    });
  },
});
