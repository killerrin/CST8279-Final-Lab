/* Buttons */
document.getElementById("saveButton").addEventListener("click", function (e) {
    if (validate.validateAll()) {
        alert("Thank You!");
    } else {
        e.preventDefault();
    }
});

document.getElementById("resetButton").addEventListener("click", function (e) {
    validate.clearErrors();
});

/* Text Fields */
document.getElementById("firstName").addEventListener("input", function (e) {
    validate.validateFirstName();
});

document.getElementById("lastName").addEventListener("input", function (e) {
    validate.validateLastName();
});

document.getElementById("grades").addEventListener("input", function (e) {
    validate.validateGrades();
});

/* Selects */
document.getElementById("courseName").addEventListener("change", function (e) {
    validate.validateCourseName();
});

document.getElementById("workType").addEventListener("change", function (e) {
    validate.validateWorkType();
});