#!/usr/bin/env python3
import cgitb
import cgi
import sqlite3

cgitb.enable()
form = cgi.FieldStorage()

firstName = form["firstName"].value
lastName = form["lastName"].value
courseName = form["courseName"].value
workType = form["workType"].value
grades = form["grades"].value

parsedGrade = int(grades)

con = sqlite3.connect("admin/CST8279.db")
with con:
    cur = con.cursor()
    cur.execute("INSERT INTO Students (FirstName, LastName, Course, WorkType, Grade) VALUES('{0}', '{1}', '{2}', '{3}', {4})".format(firstName, lastName, courseName, workType, parsedGrade))
con.close()

print("Location: ../index.html")
print("Content-type: text/html\n\n")
#print(firstName)
#print(lastName)
#print(courseName)
#print(workType)
#print(grades)