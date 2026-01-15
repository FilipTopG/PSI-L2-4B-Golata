function pokazKomunikat() {
    alert(
        "JS spoko"
    );
}

function dodajHobby() {
    const hobby = [
        "Podróże",
        "Muzyka",
        "Sport",
        "Tworzenie stron WWW",
        "jazda"
    ];

    const lista = document.getElementById("hobby-list");
    const noweHobby = hobby[Math.floor(Math.random() * hobby.length)];

    const li = document.createElement("li");
    li.textContent = noweHobby;

    lista.appendChild(li);
}
