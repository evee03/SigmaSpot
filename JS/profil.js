let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function (){
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
};



document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.querySelector("#logout");

    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.querySelector("#logout");
    const changeButton = document.querySelector("#changeNickname");
    const nicknameInput = document.querySelector("#nickname");
    const nicknameLengthError = document.querySelector("#nicknameLengthError");
    const nicknameEmptyError = document.querySelector("#nicknameEmptyError");
    const welcomeMessage = document.querySelector("#welcomeMessage");

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    welcomeMessage.textContent = `Witaj ${currentUser.nickname}!`;

    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    });

    changeButton.addEventListener("click", function () {
        const newNickname = nicknameInput.value.trim();
        if (newNickname !== "") {
            nicknameEmptyError.style.display = "none";
            if (newNickname.length <= 15) {
                nicknameLengthError.style.display = "none";
                currentUser.nickname = newNickname;
                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                updateUser(currentUser);
                welcomeMessage.textContent = `Witaj ${currentUser.nickname}!`;
            } else {
                nicknameLengthError.style.display = "block";
            }
        } else {
            nicknameEmptyError.style.display = "block";
        }
    });

    function updateUser(user) {
        const users = JSON.parse(localStorage.getItem("users"));
        const index = users.findIndex(u => u.email === user.email);
        users[index].nickname = user.nickname; // Update the nickname only
        localStorage.setItem("users", JSON.stringify(users));
    }
});

