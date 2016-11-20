#!/usr/bin/env python
import cgitb
import cgi

cgitb.enable()
form = cgi.FieldStorage()

text = form["firstName"]
print("<h1>"+text+"</h1>")