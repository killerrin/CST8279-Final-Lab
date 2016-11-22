#!/usr/bin/env python3
import sqlite3
import sys

con = sqlite3.connect("CST8279.db")
with con:
    cur = con.cursor()
    
    # Drop the Tables if they Exist
    cur.execute("DROP TABLE IF EXISTS Courses")
    cur.execute("DROP TABLE IF EXISTS WorkTypes")
    cur.execute("DROP TABLE IF EXISTS Students")

    # Create the Tables
    cur.execute("CREATE TABLE Courses(Id TEXT PRIMARY KEY, Name TEXT)")    
    cur.execute("CREATE TABLE WorkTypes(Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT)")    
    cur.execute("CREATE TABLE Students(Id INTEGER PRIMARY KEY AUTOINCREMENT, FirstName TEXT, LastName TEXT, Grade INT, CourseCode TEXT, WorkTypeID INTEGER,\
    FOREIGN KEY(CourseCode) REFERENCES Courses(Id),\
    FOREIGN KEY(WorkTypeID) REFERENCES WorkTypes(Id))")

    # Add WorkTypes
    cur.execute("INSERT INTO WorkTypes (Name) VALUES('Assignments')")
    cur.execute("INSERT INTO WorkTypes (Name) VALUES('Midterms')")
    cur.execute("INSERT INTO WorkTypes (Name) VALUES('Final Exam')")

    # Add Courses
    cur.execute("INSERT INTO Courses (Id, Name) VALUES('MAD9013', 'Cross-Platform Web Development')")
    cur.execute("INSERT INTO Courses (Id, Name) VALUES('CST8209', 'Web Programming 1')")
    cur.execute("INSERT INTO Courses (Id, Name) VALUES('CST8260', 'Database System and Concepts')")
    cur.execute("INSERT INTO Courses (Id, Name) VALUES('CST8279', 'Introduction to Computer Programming Using Python')")

    # Add Test Data to Students
    cur.execute("INSERT INTO Students (FirstName, LastName, Grade, CourseCode, WorkTypeID) VALUES ('Andrew', 'Godfroy', 100, 'CST8279', 3)")
    
# Close the Connection if it Exists
if con:
    con.close()
