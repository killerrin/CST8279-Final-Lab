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
    cur.execute("SELECT FirstName, LastName, Courses.Id, Courses.Name, WorkTypes.Name, Grade\
    FROM Students\
    JOIN Courses ON Students.CourseCode = Courses.Id\
    JOIN WorkTypes ON Students.WorkTypeID = WorkTypes.Id")   
    
    while True:
        row = cur.fetchone()
        if row == None:
            break
        #print(row)
        students.append({"firstName":row[0], "lastName":row[1], "courseName":row[2] + ": " + row[3], "workType":row[4], "grade":row[5]})

# Close the Connection if it Exists        
if con:
    con.close()

print(json.JSONEncoder().encode(students))
