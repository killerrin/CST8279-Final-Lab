function courseConstructor(firstName, lastName, courseName, workType, grade) {
    return {
        firstName: firstName,
        lastName : lastName,
        courseName : courseName,
        workType: workType,
        grade: grade,

        getAlphaGrade:function() {
            if (this.grade >= 80) {
                return "A";
            }
            else if (this.grade >= 70) {
                return "B";
            }
            else if (this.grade >= 60) {
                return "C";
            }
            else if (this.grade >= 50) {
                return "D";
            }
            else {
                return "F";
            }
        }
    }
}