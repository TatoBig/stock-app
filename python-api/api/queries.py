from re import I
from this import d
# from readline import get_history_item
from yahoo_fin.stock_info import *


def getCompany_resolver(obj, info):
    try:
        company = get_company_info("aapl").to_dict()["Value"]

        print(company["address1"])
        print(type(company["address1"]))

        payload = {
            "success": True,
            "post": {
                "zip": str(company["zip"]),
                "sector": str(company["sector"]),
                "full_time_employees": str(company["fullTimeEmployees"]),
                "compensationRisk": str(company["compensationRisk"]),
                "auditRisk": str(company["auditRisk"]),
                "longBusinessSummary": str(company["longBusinessSummary"]),
                "city": str(company["city"]),
                "phone": str(company["phone"]),
                "state": str(company["state"]),
                "shareHolderRightsRisk": str(company["shareHolderRightsRisk"]),
                "compensationAsOfEpochDate": str(company["compensationAsOfEpochDate"]),
                "governanceEpochDate": str(company["governanceEpochDate"]),
                "boardRisk": str(company["boardRisk"]),
                "country": str(company["country"]),
                "website": str(company["website"]),
                "maxAge": str(company["maxAge"]),
                "overallRisk": str(company["overallRisk"]),
                "address": str(company["address1"]),
            }
        }
        print(payload)
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)]
        }
    return payload

def getRevenue_resolver(obj, info, ticker):
    revenue = get_earnings("aapl")["Value"]
    try:
        payload = {
            "success": True,
            "post": {
                "zip": str(revenue["zip"]),
                "sector": str(revenue["sector"]),
                "full_time_employees": str(revenue["fullTimeEmployees"]),
                "compensationRisk": str(revenue["compensationRisk"]),
                "auditRisk": str(revenue["auditRisk"]),
                "longBusinessSummary": str(revenue["longBusinessSummary"]),
                "city": str(revenue["city"]),
                "phone": str(revenue["phone"]),
                "state": str(revenue["state"]),
                "shareHolderRightsRisk": str(revenue["shareHolderRightsRisk"]),
                "compensationAsOfEpochDate": str(revenue["compensationAsOfEpochDate"]),
                "governanceEpochDate": str(revenue["governanceEpochDate"]),
                "boardRisk": str(revenue["boardRisk"]),
                "country": str(revenue["country"]),
                "website": str(revenue["website"]),
                "maxAge": str(revenue["maxAge"]),
                "overallRisk": str(revenue["overallRisk"]),
                "address": str(revenue["address1"]),
            }
        }
        print(payload)
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
    try:
        payload = {
            "success": True,
            "data": [{
                "date": str(historical_data["date"]),
                "open": str(historical_data["open"]),
                "high": str(historical_data["high"]),
                "volume": str(historical_data["volume"]),
                "ticker": str(historical_data["ticker"]),
            }]
        }
        print(payload)
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)]
        }
    return payload

def getQuarterly_resolver(obj, info, ticker):
    pass



def prooving_shit():
    revenue = get_data("aapl") 
    before = revenue.index
    revenue.insert(0, "date", before, True)
    revenue.to_dict()
    # get_earnings("aapl")['yearly_revenue_earnings']

    print(revenue)

prooving_shit()
