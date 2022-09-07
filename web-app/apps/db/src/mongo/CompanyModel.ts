import mongoose from "mongoose";
import mongooseLong from "mongoose-long";

mongooseLong(mongoose);
const Long = mongoose.Schema.Types.Long;

const historicalData = new mongoose.Schema(
  {
    open: Number,
    high: Number,
    volume: Long,
    date: String,
  },
  { _id: false }
);

const companySchema = new mongoose.Schema({
  _id: String,
  name: String,
  sector: String,
  country: String,
  full_time_employees: Number,
  compensation_risk: Number,
  audit_risk: Number,
  board_risk: Number,
  overall_risk: Number,
  long_business_summary: String,
  city: String,
  state: String,
  website: String,
  historical_data: [historicalData],
});

const CompanyModel = mongoose.model("Company", companySchema);
export default CompanyModel;
