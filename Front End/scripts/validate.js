function validationErrorControllerConstructor(errorMessage, validationErrorElement, inputElement) {
    return {
        /// Aggregate Functions
        displayError: function () {
            this.showErrorMessage(errorMessage);
            this.showErrorBorder();
        },

        displayCustomError: function (customMessage) {
            this.showErrorMessage(customMessage);
            this.showErrorBorder();
        },

        clearError: function () {
            this.hideErrorMessage();
            this.hideErrorBorder();
        },

        /// Error Borders
        showErrorBorder: function () {
            inputElement.classList.add("validationErrorBorder");
        },

        hideErrorBorder: function () {
            inputElement.classList.remove("validationErrorBorder");
        },

        /// Error Messages
        showErrorMessage: function (message) {
            validationErrorElement.innerHTML = message;
        },

        hideErrorMessage: function () {
            validationErrorElement.innerHTML = "";
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

        /// Aggregate Functions
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
        },

        showErrors: function () {
            this.errorMessageFirstName.displayError();
            this.errorMessageLastName.displayError();
            this.errorMessageCourseName.displayError();
            this.errorMessageWorkType.displayError();
            this.errorMessageGrades.displayError();
        },

        clearErrors: function () {
            this.errorMessageFirstName.clearError();
            this.errorMessageLastName.clearError();
            this.errorMessageCourseName.clearError();
            this.errorMessageWorkType.clearError();
            this.errorMessageGrades.clearError();
        }
    };
}());