from re import I
from this import d
from yahoo_fin.stock_info import *


def getCompanyInfo_resolver(obj, info, ticker):
    try:
        company = get_company_info(ticker).to_dict()["Value"]
        print(company)

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

def getRevenue_resolver(obj, info, ticker):
    revenue = get_earnings("aapl")
    try:
        payload = {
            "success": True,
            "post": {
                "zip": "WIP",
                
            }
        }
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)]
        }
    return payload

def getHistoricalData_resolver(obj, info):
    historical_data = get_data("aapl")
    before = historical_data.index
    historical_data.insert(0, "date", before, True)
    # get_history_item("aapl")["Value"]
    data = [] 
    rows = len(historical_data)
    for i in range(rows):
        temp = {
            "date": str(historical_data["date"][i]),
            "open": str(historical_data["open"][i]),
            "high": str(historical_data["high"][i]),
            "volume": str(historical_data["volume"][i]),
            "ticker": str(historical_data["ticker"][i])
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

def getQuarterly_resolver(obj, info):
    print("hi")
    quarterly = get_earnings("aapl")["quarterly_revenue_earnings"]
    data = [] 
    rows = len(quarterly)
    for i in range(rows):
        temp = {
            "date": str(quarterly["date"][i]),
            "revenue": str(quarterly["revenue"][i]),
            "earnings": str(quarterly["earnings"][i]),
            "ticker": "appl",
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
    

def getYearly_resolver(obj, info):
    revenue = get_earnings("aapl")["yearly_revenue_earnings"]
    data = [] 
    rows = len(revenue)
    for i in range(rows):
        temp = {
            "date": str(revenue["date"][i]),
            "revenue": str(revenue["revenue"][i]),
            "earnings": str(revenue["earnings"][i]),
            "ticker": "appl",
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
