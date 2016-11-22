#!/usr/bin/env python3
import cgitb
import cgi
import sqlite3
import json

print("Content-type: application/json")
print("")

students = []

con = sqlite3.connect("admin/CST8279.db")
with con:
    cur = con.cursor()
    cur.execute("SELECT * FROM Students")   
    
    while True:
        row = cur.fetchone()
        if row == None:
            break
        students.append({"firstName":row[1], "lastName":row[2], "courseName":row[3], "workType":row[4], "grade":row[5]})

# Close the Connection if it Exists        
if con:
    con.close()

print(json.JSONEncoder().encode(students))