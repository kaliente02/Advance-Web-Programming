document.addEventListener('DOMContentLoaded', function () {
    var year = [
        "I – Freshman",
        "II – Sophomore",
        "III – Junior",
        "IV – Senior",
    ];

    var yearDropdown = document.getElementById('year');

    year.forEach(function (year) {
        var option = document.createElement('option');
        option.value = year;
        option.text = year;
        yearDropdown.add(option);
    });
});

function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var course = document.getElementById("course").value;
    var year = document.getElementById("year").value;

    console.clear();
    console.log("User Information:");
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("Phone #: " + phone);
    console.log("Age: " + age);
    console.log("Course: " + course);
    console.log("Year: " + year);
}