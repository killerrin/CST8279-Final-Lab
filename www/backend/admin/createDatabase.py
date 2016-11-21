#!/usr/bin/env python3
import sqlite3
import sys

con = sqlite3.connect("CST8279.db")
with con:
    cur = con.cursor()
    
    cur.execute("DROP TABLE IF EXISTS Students")
    cur.execute("CREATE TABLE Students(Id INTEGER PRIMARY KEY AUTOINCREMENT, FirstName TEXT, LastName TEXT, Course TEXT, WorkType TEXT, Grade INT)")
con.close()