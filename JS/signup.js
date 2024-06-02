<!--MOVE TO IN LOGIN -->
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("signup").onclick = function() {
        window.location.href = "login.html";
    };
});
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
<!--VALIDATION-DATA-->
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#form-group");
    const signupButton = document.querySelector("#login");

    // Dodanie sprawdzania w czasie rzeczywistym podczas wpisywania danych
    const nicknameInput = document.querySelector("#nickname");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    nicknameInput.addEventListener("input", function () {
        validateField(nicknameInput);
    });

    emailInput.addEventListener("input", function () {
        validateField(emailInput);
    });

    passwordInput.addEventListener("input", function () {
        validateField(passwordInput);
    });

    signupButton.addEventListener("click", function () {
        const nickname = document.querySelector("#nickname").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        if (validateSignupForm(nickname, email, password)) {
            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

            const userExists = existingUsers.some(
                (user) => user.email === email || user.nickname === nickname
            );

            if (!userExists) {
                const newUser = { nickname, email, password, points: 0, askedQuestions: [0] }; // Dodanie askedQuestions
                existingUsers.push(newUser);
                localStorage.setItem("users", JSON.stringify(existingUsers));
                alert("Rejestracja zakończona pomyślnie! Możesz się teraz zalogować.");
                window.location.href = "login.html";
            } else {
                alert("Użytkownik o takim adresie email lub nazwie użytkownika już istnieje!");
            }
        }
    });
});

function validateField(element) {
    const nickname = document.querySelector("#nickname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (element.id === "nickname") {
        validateNickname(element, nickname);
    } else if (element.id === "email") {
        validateEmail(element, email);
    } else if (element.id === "password") {
        validatePassword(element, password);
    }
}

function validateNickname(element, nickname) {
    if (nickname.trim() === "") {
        setError(element, "Nazwa użytkownika nie może być pusta");
    } else {
        setSuccess(element);
    }
}

function validateEmail(element, email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        setError(element, "Email nie może być pusty");
    } else if (!emailRegex.test(email)) {
        setError(element, "Podano nieprawidłowy adres email");
    } else {
        setSuccess(element);
    }
}

function validatePassword(element, password) {
    if (password.trim() === "") {
        setError(element, "Hasło nie może być puste");
    } else if (password.length < 6) {
        setError(element, "Hasło musi mieć co najmniej 6 znaków");
    } else {
        setSuccess(element);
    }
}

function validateSignupForm(nickname, email, password) {
    const nicknameInput = document.querySelector("#nickname");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;

    validateNickname(nicknameInput, nickname);
    validateEmail(emailInput, email);
    validatePassword(passwordInput, password);

    if (nicknameInput.classList.contains("error") || emailInput.classList.contains("error") || passwordInput.classList.contains("error")) {
        valid = false;
    }

    if (nickname.trim() === "" || email.trim() === "" || password.trim() === "") {
        valid = false;
        setError(nicknameInput, "Wszystkie pola muszą być wypełnione");
        setError(emailInput, "Wszystkie pola muszą być wypełnione");
        setError(passwordInput, "Wszystkie pola muszą być wypełnione");
    }

    return valid;
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    element.style.borderColor = 'red';
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    element.style.borderColor = 'green';
};


