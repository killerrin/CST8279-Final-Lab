#!/usr/bin/env python3
import cgitb
import cgi

cgitb.enable()
form = cgi.FieldStorage()

firstName = form["firstName"].value
lastName = form["lastName"].value
courseName = form["courseName"].value
workType = form["workType"].value
grades = form["grades"].value

print("Location: ../index.html")
print("Content-type: text/html\n\n")
#print(firstName)
#print(lastName)
#print(courseName)
#print(workType)
#print(grades)