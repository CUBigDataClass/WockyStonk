import pymysql
import sqlalchemy
import requests
import alpha_vantage
import pandas as pd

from alpha_vantage.timeseries import TimeSeries

"""
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
"""

"""
#Establish Connection to DB
connection = pymysql.connect(host='wockystonksdb.cnmtp6tov1dk.us-east-2.rds.amazonaws.com',
                             user='wocky',
                             password='stonksgoup',
                             db='wockyDB')

# Allow for execution of SQL queries
cursor = connection.cursor()
"""
key = "CD4M3BIUZFFI9SZ7"
symbolName = 'TSLA'
ts = TimeSeries(key, output_format='pandas')
data, meta = ts.get_intraday_extended('TSLA', interval='1min', outputsize='full')
columns = ['open', 'high', 'low', 'close', 'volume']
data.columns = columns

data.insert(loc=0,
            column = 'symbol',
            value = symbolName)

#print(data)

connection = pymysql.connect(host='wockystonksdb.cnmtp6tov1dk.us-east-2.rds.amazonaws.com',
                             user='wocky',
                             password='stonksgoup',
                             db='wockyDB')

cursor = connection.cursor()

from sqlalchemy import create_engine

engine = create_engine('mysql+pymysql://wocky:stonksgoup@wockystonksdb.cnmtp6tov1dk.us-east-2.rds.amazonaws.com/wockyDB')

data.to_sql('testStockInfoSymbol', con=engine)
