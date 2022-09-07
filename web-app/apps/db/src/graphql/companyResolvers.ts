import { extendType, nonNull, objectType, stringArg } from "nexus";
import CompanyModel from "../mongo/CompanyModel";
import { NexusGenObjects } from "../../nexus-typegen";
import request, { gql } from "graphql-request";
import tickers from "../tickers";
require("dotenv").config();

export const Company = objectType({
  name: "Company",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.nonNull.string("sector");
    t.nonNull.string("country");
    t.nonNull.int("full_time_employees");
    t.nonNull.int("compensation_risk");
    t.nonNull.int("audit_risk");
    t.nonNull.int("board_risk");
    t.nonNull.int("overall_risk");
    t.nonNull.string("long_business_summary");
    t.nonNull.string("city");
    t.nonNull.string("state");
    t.nonNull.string("website");
  },
});

const query = (ticker: string) => gql`
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

export const MongoCompanyQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("mongodb_companies", {
      type: "Company",
      async resolve(parent, args, context, info) {
        return [];
      },
    });
  },
});

export const SQLCompanyQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("sql_companies", {
      type: "Company",
      resolve(parent, args, context) {
        console.log(context.prisma.company.findMany());
        return context.prisma.company.findMany();
      },
    });
  },
});

export const CompanyMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("addCompany", {
      type: "Boolean",
      args: {
        ticker: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        try {
          const ticker = args.ticker.toUpperCase();

          const response = (await request(process.env.API_URL!, query(ticker)))
            .getCompanyInfo;

          if (response.success) {
            const data = response.data;

            const description = data.long_business_summary.substring(0, 150);
            delete data.long_business_summary;

            const mongoCompany = new CompanyModel({
              _id: ticker,
              name: tickers[ticker],
              long_business_summary: description,
              ...data,
            });

            await mongoCompany.save()

            const created = await context.prisma.company.create({
              data: {
                id: ticker,
                name: tickers[ticker],
                long_business_summary: description,
                ...data,
              },
            });
            console.log(created);
            return true;
          }
          console.log(response.errors)
          return false;
        } catch (e) {
          console.log(e);
          return false;
        }
      },
    });
  },
});
