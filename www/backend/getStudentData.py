#!/usr/bin/env python3
import cgitb
import cgi
import json

# Reference http://stackoverflow.com/questions/4315900/how-can-i-send-a-json-object-from-a-python-script-to-jquery
print("Content-type: application/json")
print("")

#response = {'Price':54,'Cost':'99'}
#print(json.JSONEncoder().encode(response))