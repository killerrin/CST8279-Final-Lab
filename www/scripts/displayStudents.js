var displayStudents = (function () {
    var clear = function () {
        var tableBody = document.getElementById("tableDisplayBody");
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }
    };

    var display = function () {
        httpGetAsync(getDomainNameAndFolder() + "/backend/getStudents.py", function(response) {
            // Parse the response back into a Javascript Object
            // http://codehandbook.org/javascript-json-array-revisited/
            var responseObject = JSON.parse(response);

            // Convert those to Student Objects
            var studentArray = new Array();
            for(var i = 0; i < responseObject.length; i++) {
                var course = studentConstructor(
                    responseObject[i].firstName,
                    responseObject[i].lastName,
                    responseObject[i].courseCode + " - " + responseObject[i].courseName,
                    responseObject[i].workType,
                    responseObject[i].grade);
                studentArray.push(course);
            }

            // For all of the elements in the studentArray, create the Table Row and Append it
            var tableBody = document.getElementById("tableDisplayBody");
            for(var i = 0; i < studentArray.length; i++) {
                // Create the Row
                var newRow = document.createElement("tr");
                
                // Create all of the Elements
                var firstName = document.createElement("td");
                var lastName = document.createElement("td");
                var courseName = document.createElement("td");
                var workType = document.createElement("td");
                var grade = document.createElement("td");

                // Assign the Elements InnerHTML
                firstName.innerHTML = studentArray[i].firstName;
                lastName.innerHTML = studentArray[i].lastName;
                courseName.innerHTML = studentArray[i].courseName;
                workType.innerHTML = studentArray[i].workType;
                grade.innerHTML = studentArray[i].getAlphaGrade();

                // Append the children to the Row
                newRow.appendChild(firstName);
                newRow.appendChild(lastName);
                newRow.appendChild(courseName);
                newRow.appendChild(workType);
                newRow.appendChild(grade);

                // And finally, add the row to the tableBody
                tableBody.appendChild(newRow);
            }
        });
    };

    clear();
    display();

    return {
        clear: clear,
        display: display
    };
}());