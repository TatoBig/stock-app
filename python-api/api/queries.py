def listPosts_resolver(obj, info):
    try:
        payload = {
            "success": True,
            "posts": {
              "brand": "Ford",
              "model": "Mustang",
              "year": 1964
            }
        }
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)]
        }
    return payload