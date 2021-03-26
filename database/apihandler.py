import pymysql
import sqlalchemy
import requests
import alpha_vantage
import pandas as pd

from alpha_vantage.timeseries import TimeSeries
from sqlalchemy import create_engine

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
ts = TimeSeries(key, output_format='pandas')
data, meta = ts.get_intraday('TSLA', interval='1min', outputsize='full')
columns = ['open', 'high', 'low', 'close', 'volume']
data.columns = columns
data['symbol'] = meta['2. Symbol']
data = data[['symbol','open', 'high', 'low', 'close', 'volume']]
data['tradeDate'] = data.index.date
data['time'] = data.index.time
#print(data)

connection = pymysql.connect(host='wockystonksdb.cnmtp6tov1dk.us-east-2.rds.amazonaws.com',
                             user='wocky',
                             password='stonksgoup',
                             db='wockyDB')

cursor = connection.cursor()

engine = create_engine('mysql+pymysql://wocky:stonksgoup@wockystonksdb.cnmtp6tov1dk.us-east-2.rds.amazonaws.com/wockyDB')

print(data)
#data.to_sql('testStockInfo', con=engine)
