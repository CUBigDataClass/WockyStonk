import pymysql
import pandas as pd
import numpy as np

# Establish connection to database
connection = pymysql.connect(host='wockystonksdb.cnmtp6tov1dk.us-east-2.rds.amazonaws.com',
                             user='wocky',
                             password='stonksgoup',
                             db='wockyDB')

# Test function


def handler():
    # CURSOR CLASS USED TO INVOKE METHODS TO EXECUTE SQLITE
    cursor = connection.cursor()
    cursor.execute('SELECT * from userInfo')  # Test query on userInfo table

    rows = cursor.fetchall()
    # {0} is the first column (username) and {1} is the second column (password)
    for row in rows:
        print("{0} {1}".format(row[0], row[1]))


def insertTest():
    cursor = connection.cursor()
    sql = "INSERT IGNORE INTO userInfo (Username, Password) VALUES ( %s, %s)"
    val = ("John", "InsertTestPassword")
    cursor.execute(sql, val)
    print(cursor.rowcount, "record inserted.")


insertTest()

connection.commit()
# handler()
