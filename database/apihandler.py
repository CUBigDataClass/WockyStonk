#import pymysql
import requests
import alpha_vantage

API_URL = "https://www.alphavantage.co/query"

data = {
    "function": "TIME_SERIES_DAILY",
    "symbol": "TSLA",
    "outputsize": "compact",
    "datatype": "json",
    "apikey": "CD4M3BIUZFFI9SZ7",
    }

response = requests.get(API_URL, data) 
print(response.json())

