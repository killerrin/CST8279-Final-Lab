#!/usr/bin/env python3
import cgitb
import cgi
import sqlite3
import json

print("Content-type: application/json")
print("")

courses = []

con = sqlite3.connect("admin/CST8279.db")
with con:
    cur = con.cursor()
    cur.execute("SELECT * FROM Courses")   
    
    while True:
        row = cur.fetchone()
        if row == None:
            break
        #print(row)
        courses.append({"ID":row[0], "Name":row[1]})

# Close the Connection if it Exists        
if con:
    con.close()

print(json.JSONEncoder().encode(courses))
