    // JavaScript code for form validation
    const form = document.getElementById("myForm");
    const userInput = document.getElementById("userInput");
    const message = document.getElementById("message");

	// Prevent form from submitting
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Retrieve the input field value
        const value = userInput.value.trim()    ;

        // Regular expression pattern for alphanumeric input
        const alphaNumPattern = /^[a-zA-Z0-9]+$/;

        // Check if the input value matches the pattern
        if (alphaNumPattern.test(value)) {

            // Valid input: display confirmation and submit the form
            message.style.color = "green";
            message.textContent = "Success! Input is alphanumeric. (Form submission simulated)";

        } else {

            // Invalid input: display error message
            message.style.color = "red";
            message.textContent = "Error: Input must contain letters and numbers only.";
        }
    });