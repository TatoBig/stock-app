from re import I
from this import d
from yahoo_fin.stock_info import *


def getCompanyInfo_resolver(obj, info, ticker):
    try:
        company = get_company_info(ticker).to_dict()["Value"]
        payload = {
            "success": True,
            "data": {
                "zip": company["zip"],
                "sector": company["sector"],
                "full_time_employees": company["fullTimeEmployees"],
                "compensation_risk": company["compensationRisk"],
                "audit_risk": company["auditRisk"],
                "long_business_summary": company["longBusinessSummary"],
                "city": company["city"],
                "phone": company["phone"],
                "state": company["state"],
                "share_holder_rights_risk": company["shareHolderRightsRisk"],
                "compensation_as_of_epoch_date": company["compensationAsOfEpochDate"],
                "governance_epoch_date": company["governanceEpochDate"],
                "board_risk": company["boardRisk"],
                "country": company["country"],
                "website": company["website"],
                "max_age": company["maxAge"],
                "overall_risk": company["overallRisk"],
                "address": company["address1"],
            }
        }
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)]
        }
    return payload


def getHistoricalData_resolver(obj, info, ticker):
    try:
        historical_data = get_data(ticker)
        before = historical_data.index

        historical_data.insert(0, "date", before, True)
        data = []
        rows = len(historical_data)

        for i in range(rows):
            temp = {
                "date": historical_data["date"][i],
                "open": historical_data["open"][i],
                "high": historical_data["high"][i],
                "volume": str(historical_data["volume"][i]),
                "ticker": historical_data["ticker"][i]
            }
            data.append(temp)
        
        payload = {
            "success": True,
            "data": data
        }
        print(payload)
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)]
        }
    return payload


def getQuarterly_resolver(obj, info, ticker):
    quarterly = get_earnings(ticker)["quarterly_revenue_earnings"]
    data = []
    rows = len(quarterly)
    for i in range(rows):
        temp = {
            "date": quarterly["date"][i],
            "revenue": quarterly["revenue"][i],
            "earnings": quarterly["earnings"][i],
            "ticker": ticker,
        }
        data.append(temp)
    try:
        payload = {
            "success": True,
            "data": data
        }
        print(payload)
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)]
        }
    return payload


def getYearly_resolver(obj, info, ticker):
    revenue = get_earnings(ticker)["yearly_revenue_earnings"]
    data = []
    rows = len(revenue)
    for i in range(rows):
        temp = {
            "date": revenue["date"][i],
            "revenue": revenue["revenue"][i],
            "earnings": revenue["earnings"][i],
            "ticker": ticker,
        }
        data.append(temp)
    try:
        payload = {
            "success": True,
            "data": data
        }
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)]
        }
    return payload
