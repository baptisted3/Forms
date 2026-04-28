// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("personForm");

    // Add event listener (NO onclick)
    form.addEventListener("submit", submitForm);

});

function submitForm(event) {
    event.preventDefault(); // stop page refresh

    // Get values from form
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const course = document.getElementById("course").value;
    const section = document.getElementById("section").value;
    const role = document.getElementById("role").value;

    // Create person object
    const person = {
        firstName: firstName,
        lastName: lastName,
        course: course,
        section: section,
        role: role,
    };

    // Print JavaScript object
    console.log("JavaScript Object:");
    console.log(person);

    // Print JSON (multi-line format)
    console.log("JSON Format:");
    console.log(JSON.stringify(person, null, 2));
}