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