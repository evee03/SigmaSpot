// const form = document.getElementById('form-group');
// const username = document.getElementById('nickname');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
//
//
// form.addEventListener('submit', e => {
//     e.preventDefault();
//     validateInputs();
// });
//
// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');
//
//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
//     element.style.borderColor = 'red';
// };
//
// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');
//
//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
//     element.style.borderColor = 'green';
// };
//
// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// };
//
// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//
//     const usernameRegex = /^[a-zA-Z0-9]+$/;
//     const passwordRegex = /^[a-zA-Z0-9]+$/;
//
//     let isValid = true; // Zmienna, która śledzi poprawność danych
//
//     if (usernameValue === '' || usernameValue == null) {
//         setError(username, 'Nazwa użytkownika jest wymagana');
//         isValid = false; // Dane nie są poprawne
//     } else if (!usernameRegex.test(usernameValue)) {
//         setError(username, 'Nazwa użytkownika może zawierać tylko litery i cyfry (bez spacji)');
//         isValid = false; // Dane nie są poprawne
//     } else if (usernameValue.length > 15) {
//         setError(username, 'Nazwa użytkownika nie może być dłuższa niż 15 znaków');
//         isValid = false; // Dane nie są poprawne
//     } else {
//         setSuccess(username);
//     }
//
//     if (emailValue === '' || emailValue == null) {
//         setError(email, 'Email jest wymagany');
//         isValid = false; // Dane nie są poprawne
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Wprowadź prawidłowy email');
//         isValid = false; // Dane nie są poprawne
//     } else if (!emailValue.includes('@')) {
//         setError(email, 'Adres email musi zawierać znak "@"');
//         isValid = false; // Dane nie są poprawne
//     } else {
//         setSuccess(email);
//     }
//
//     if (passwordValue === '') {
//         setError(password, 'Hasło jest wymagane');
//         isValid = false; // Dane nie są poprawne
//     } else if (!passwordRegex.test(passwordValue)) {
//         setError(password, 'Hasło może zawierać tylko litery i cyfry (bez spacji)');
//         isValid = false; // Dane nie są poprawne
//     } else if (passwordValue.length > 30) {
//         setError(password, 'Hasło nie może być dłuższe niż 30 znaków');
//         isValid = false; // Dane nie są poprawne
//     } else if (passwordValue.length < 8) {
//         setError(password, 'Hasło musi zawierać co najmniej 8 znaków.');
//         isValid = false; // Dane nie są poprawne
//     } else {
//         setSuccess(password);
//     }
//
//     // Sprawdzenie, czy dane są poprawne
//     if (isValid) {
//         // Pobranie danych z formularza
//         const usernameValue = document.getElementById('username').value;
//         const emailValue = document.getElementById('email').value;
//         const passwordValue = document.getElementById('password').value;
//
//         // Sprawdzenie, czy użytkownik już istnieje
//         const storedData = JSON.parse(localStorage.getItem('users')) || [];
//         if (storedData.some(user => user.username === usernameValue || user.email === emailValue)) {
//             // Użytkownik o podanym loginie lub adresie e-mail już istnieje
//             alert('Użytkownik o podanym loginie lub adresie e-mail już istnieje.');
//         } else {
//             // Dodanie nowego użytkownika, jeśli nie istnieje
//             const newUser = {
//                 username: usernameValue,
//                 email: emailValue,
//                 password: passwordValue
//             };
//             storedData.push(newUser);
//             localStorage.setItem('users', JSON.stringify(storedData));
//             alert('Nowy użytkownik został dodany.');
//
//             // Zaloguj użytkownika
//             localStorage.setItem('loggedInUser', usernameValue);
//
//             // Przekierowanie użytkownika na stronę graj.html po udanej rejestracji
//             window.location.href = 'graj.html';
//         }
//     } else {
//         // Nieprawidłowe dane
//         alert('Nieprawidłowe dane.');
//     }
//
// // Sprawdzenie, czy użytkownik jest zalogowany na podstawie danych w localStorage
//     var isLoggedIn = false;
//
// // Pobranie danych z localStorage
//     var loggedInUser = localStorage.getItem('loggedInUser');
//
// // Sprawdzenie, czy istnieją dane zalogowanego użytkownika w localStorage
//     if (loggedInUser) {
//         // Użytkownik jest zalogowany
//         isLoggedIn = true;
//     } else {
//         // Użytkownik nie jest zalogowany
//         isLoggedIn = false;
//     }
//
// // Jeśli użytkownik nie jest zalogowany, wyświetl komunikat
//     if (!isLoggedIn && window.location.pathname !== '/login.html') {
//         alert('Nie ma takiego użytkownika.');
//     }
//
// // Przekierowanie użytkownika na stronę graj.html jeśli jest zalogowany
//     if (isLoggedIn) {
//         window.location.href = 'graj.html';
//     } else {
//         alert('Uwierzytelnienie nie powiodło się.');
//     }
//
//
//
//
// };

