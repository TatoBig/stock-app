import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: String,
  sector: String,
  ticker: String,
  country: String,
});

const Company = mongoose.model("Company", companySchema);
export default Company;
