var populateCourses = (function () {
    var clear = function () {
        var selectBody = document.getElementById("courseName");
        while (selectBody.firstChild) {
            selectBody.removeChild(selectBody.firstChild);
        }
    };

    var display = function () {
        httpGetAsync(getDomainNameAndFolder() + "/backend/getCourses.py", function(response) {
            var responseObject = JSON.parse(response);

            var selectBody = document.getElementById("courseName");  
            var defaultOption = document.createElement("option")
            defaultOption.value = "";
            defaultOption.text = "Select A Course";
            selectBody.appendChild(defaultOption);

            for(var i = 0; i < responseObject.length; i++) {
                var option = document.createElement("option")
                option.value = responseObject[i].ID;
                option.text = responseObject[i].ID + " - " + responseObject[i].Name;
                selectBody.appendChild(option);
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

var populateWorkTypes = (function () {
    var clear = function () {
        var selectBody = document.getElementById("workType");
        while (selectBody.firstChild) {
            selectBody.removeChild(selectBody.firstChild);
        }
    };

    var display = function () {
        httpGetAsync(getDomainNameAndFolder() + "/backend/getWorkTypes.py", function(response) {
            var responseObject = JSON.parse(response);

            var selectBody = document.getElementById("workType");   
            var defaultOption = document.createElement("option")
            defaultOption.value = "";
            defaultOption.text = "Select Work Type";
            selectBody.appendChild(defaultOption);
            
            for(var i = 0; i < responseObject.length; i++) {
                var option = document.createElement("option")
                option.value = responseObject[i].ID;
                option.text = responseObject[i].Name;
                selectBody.appendChild(option);
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