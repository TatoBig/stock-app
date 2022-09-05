import { extendType, objectType } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const Company = objectType({
  name: "Company",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.nonNull.string("country");
    t.nonNull.string("sector");
  },
});

let companies: NexusGenObjects["Company"][] = [
  // 1
  {
    id: "aapl",
    name: "Apple",
    country: "usa",
    sector: "tech",
  },
  {
    id: "stoc",
    name: "Stockx",
    country: "usa",
    sector: "cloth",
  },
];

export const CompanyQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("companies", {
      type: "Company",
      resolve(parent, args, context, info) {
        return companies;
      },
    });
  },
});
