from re import I
from yahoo_fin.stock_info import *


def listPosts_resolver(obj, info):
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
