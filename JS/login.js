<!--EYE-->
function togglePasswordVisibility() {
    let passwordInput = document.getElementById("password");
    let toggleIcon = document.getElementById("togglepassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = "visibility";

        setTimeout(function() {
            passwordInput.type = "password";
            toggleIcon.textContent = "visibility_off";
        }, 1000);
    } else {
        passwordInput.type = "password";
        toggleIcon.textContent = "visibility_off";
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#form-group");
    const loginButton = document.querySelector("#login");
    const signupButton = document.querySelector("#signup");

    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInput.addEventListener("input", function () {
        validateEmail();
    });

    passwordInput.addEventListener("input", function () {
        validatePassword();
    });

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (validateLoginForm()) {
            const email = emailInput.value;
            const password = passwordInput.value;

            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

            const user = existingUsers.find((user) => user.email === email);

            if (user && user.password === password) {
                localStorage.setItem("currentUser", JSON.stringify(user));
                window.location.href = "graj.html";
            } else {
                alert("Nieprawidłowy email lub hasło!");
            }
        }
    });

    signupButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "signup.html";
    });

    function validateEmail() {
        if (emailInput.value.trim() === "") {
            setErrorFor(emailInput, "Email nie może być pusty");
            return false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            setErrorFor(emailInput, "Podano nieprawidłowy adres email");
            return false;
        } else {
            setSuccessFor(emailInput);
            return true;
        }
    }

    function validatePassword() {
        if (passwordInput.value.trim() === "") {
            setErrorFor(passwordInput, "Hasło nie może być puste");
            return false;
        } else {
            setSuccessFor(passwordInput);
            return true;
        }
    }

    function validateLoginForm() {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (!isEmailValid || !isPasswordValid) {
            return false;
        }

        return true;
    }

    const setErrorFor = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
        element.style.borderColor = 'red';
    };

    const setSuccessFor = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
        element.style.borderColor = 'green';
        }
});




