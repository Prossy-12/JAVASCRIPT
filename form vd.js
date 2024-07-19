document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const result = document.getElementById('result');
    const resetButton = document.getElementById('resetButton');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        const isValid = validateForm();
        if (isValid) {
            displayResult();
            // Redirect after successful validation
            setTimeout(() => {
                window.location.href = "https://example.com/success"; // Change to the desired URL
            }, 2000);
        }
    });

    resetButton.addEventListener('click', function () {
        form.reset();
        clearErrors();
        result.textContent = '';
    });

    function validateForm() {
        clearErrors();
        let isValid = true;

        if (!validateUsername(username.value)) {
            displayError('usernameError', 'Username must be at least 3 characters long and contain only letters and numbers.');
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            displayError('emailError', 'Invalid email format.');
            isValid = false;
        }

        if (!validatePassword(password.value)) {
            displayError('passwordError', 'Password must be at least 6 characters long and contain at least one number and one letter.');
            isValid = false;
        }

        return isValid;
    }

    function validateUsername(username) {
        const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
        return usernameRegex.test(username);
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return passwordRegex.test(password);
    }

    function displayError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    function clearErrors() {
        document.getElementById('usernameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
    }

    function displayResult() {
        result.textContent = `Username: ${username.value}, Email: ${email.value}`;
    }
});
