import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  _id: String,
  name: String,
  sector: String,
  country: String,
  employees: Number,
  compensationRisk: Number,
  auditRisk: Number,
  boardRisk: Number,
  overallRisk: Number,
  description: String,
  city: String,
  state: String,
  website: String
});

const Company = mongoose.model("Company", companySchema);
export default Company;
