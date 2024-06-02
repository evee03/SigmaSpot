let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function (){
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
};

let questions;
let askedQuestions = [0];
let currentQuestionIndex = 0;

fetch('zagadki.JSON')
    .then(response => response.json())
    .then(data => {
        questions = data;
        displayQuestion(askedQuestions[0]);
    })
    .catch(error => console.error('Błąd podczas pobierania pytań:', error));

const riddleElement = document.getElementById("riddle");
const answerInput = document.getElementById("answer");
const pointsElement = document.getElementById("points");

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

function getUsers() {
    return JSON.parse(localStorage.getItem("users"));
}

function updatePoints(points) {
    const currentUser = getCurrentUser();
    const users = getUsers();
    const index = users.findIndex(user => user.email === currentUser.email);
    if (index !== -1) {
        users[index].points = points;
        users[index].askedQuestions = askedQuestions;
        localStorage.setItem("users", JSON.stringify(users));
    }
}

function getUserPoints() {
    const currentUser = getCurrentUser();
    const users = getUsers();
    const user = users.find(user => user.email === currentUser.email);
    return user ? user.points : 0;
}

function displayQuestion(index) {
    if (questions && currentQuestionIndex < questions.length) {
        if (!askedQuestions.includes(index)) {
            riddleElement.textContent = questions[index].pytanie;
            answerInput.value = "";
            points = getUserPoints();
            pointsElement.textContent = `Punkty: ${points}`;
        } else {
            if (askedQuestions.length === questions.length) {
                riddleElement.textContent = "Koniec gry";
                answerInput.style.display = "none";
                document.getElementById("check").style.display = "none";
                pointsElement.textContent = `Punkty: ${points}`;
            } else {
                currentQuestionIndex++;
                displayQuestion(currentQuestionIndex);
            }
        }
    }
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].odpowiedz.toLowerCase();
    if (userAnswer === correctAnswer) {
        points += questions[currentQuestionIndex].punkty;
        alert("Dobra odpowiedź!");
        updatePoints(points);
        askedQuestions.push(currentQuestionIndex);
        currentQuestionIndex++;
    } else {
        alert("Zła odpowiedź. Spróbuj ponownie!");
    }
    displayQuestion(currentQuestionIndex);
}

document.getElementById("check").addEventListener("click", function(event) {
    event.preventDefault();
    checkAnswer();
});


document.addEventListener("DOMContentLoaded", function () {
    const currentUser = getCurrentUser();
    const users = getUsers();
    const user = users.find(user => user.email === currentUser.email);
    if (user && user.askedQuestions) {
        askedQuestions = user.askedQuestions;
        // Znajdź indeks ostatniego pytania
        currentQuestionIndex = askedQuestions[askedQuestions.length - 1] + 1;
        displayQuestion(currentQuestionIndex);
    } else {
        displayQuestion(0);
    }
});







