function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

function getUsers() {
    return JSON.parse(localStorage.getItem("users"));
}

function displayRanking() {
    const users = getUsers();
    users.sort((a, b) => b.points - a.points); // Sortowanie graczy według ilości punktów

    const block = document.getElementById("block");

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    const thNickname = document.createElement("th");
    thNickname.textContent = "Pseudonim";
    const thPoints = document.createElement("th");
    thPoints.textContent = "Punkty";

    headerRow.appendChild(thNickname);
    headerRow.appendChild(thPoints);
    thead.appendChild(headerRow);

    table.appendChild(thead);
    table.appendChild(tbody);

    users.forEach(user => {
        const row = document.createElement("tr");
        const cellNickname = document.createElement("td");
        cellNickname.textContent = user.nickname;
        const cellPoints = document.createElement("td");
        cellPoints.textContent = user.points;

        row.appendChild(cellNickname);
        row.appendChild(cellPoints);
        tbody.appendChild(row);
    });

    block.appendChild(table);
}

document.addEventListener("DOMContentLoaded", function () {
    displayRanking();
});

