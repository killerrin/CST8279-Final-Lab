var validationErrorControllerConstructor = function (errorMessage, validationErrorElement, inputElement) {
    return {
        displayError: function () {
            validationErrorElement.innerHTML = errorMessage;
            this.showErrorBorder();
        },

        displayCustomError: function(customMessage) {
            validationErrorElement.innerHTML = customMessage;
            this.showErrorBorder();
        },

        clearError: function () {
            validationErrorElement.innerHTML = "";
            this.hideErrorBorder();
        },

        showErrorBorder : function() {
            inputElement.classList.add("validationErrorBorder");
        },

        hideErrorBorder : function() {
            inputElement.classList.remove("validationErrorBorder");
        }

    }
}

var validate = (function () {
    var getValidationErrorElement = function (inputElement) {
        var parent = inputElement.parentNode
        for (var i = 0; i < parent.children.length; i++) {
            var childElement = parent.children[i];
            if (childElement.classList.contains("validationError")) {
                return childElement;
            }
        }

        return null;
    }

    var form = document.forms["courseEntryForm"];
    return {
        errorMessageFirstName: validationErrorControllerConstructor("You are required to enter in a First Name", getValidationErrorElement(form["firstName"]), form["firstName"]),
        validateFirstName: function () {
            var field = form["firstName"];
            if (field.value == null || field.value == "") {
                this.errorMessageFirstName.displayError();
                return false;
            }
            this.errorMessageFirstName.clearError();
            return true;
        },

        errorMessageLastName: validationErrorControllerConstructor("You are required to enter in a Last Name", getValidationErrorElement(form["lastName"]), form["lastName"]),
        validateLastName: function () {
            var field = form["lastName"];
            if (field.value == null || field.value == "") {
                this.errorMessageLastName.displayError();
                return false;
            }
            this.errorMessageLastName.clearError();
            return true;
        },

        errorMessageCourseName: validationErrorControllerConstructor("You are required to select a Course Name", getValidationErrorElement(form["courseName"]), form["courseName"]),
        validateCourseName: function () {
            var field = form["courseName"];
            if (field.value == null || field.value == "") {
                this.errorMessageCourseName.displayError();
                return false;
            }
            this.errorMessageCourseName.clearError();
            return true;
        },

        errorMessageWorkType: validationErrorControllerConstructor("You are required to select a Work Type", getValidationErrorElement(form["workType"]), form["workType"]),
        validateWorkType: function () {
            var field = form["workType"];
            if (field.value == null || field.value == "") {
                this.errorMessageWorkType.displayError();
                return false;
            }
            this.errorMessageWorkType.clearError();
            return true;
        },

        errorMessageGrades: validationErrorControllerConstructor("You are required to enter Grade(s)", getValidationErrorElement(form["grades"]), form["grades"]),
        validateGrades: function () {
            var field = form["grades"];
            if (field.value == null || field.value == "") {
                this.errorMessageGrades.displayError();
                return false;
            }
            this.errorMessageGrades.clearError();
            return true;
        },

        validateAll: function () {
            var valid = true;

            if (!this.validateFirstName()) {
                valid = false;
            }

            if (!this.validateLastName()) {
                valid = false;
            }

            if (!this.validateCourseName()) {
                valid = false;
            }

            if (!this.validateWorkType()) {
                valid = false;
            }

            if (!this.validateGrades()) {
                valid = false;
            }

            return valid;
        }
    };
}());