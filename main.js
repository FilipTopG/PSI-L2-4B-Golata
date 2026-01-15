function pokazKomunikat() {
    alert(
        "JavaScript jest wszechstronny – działa w przeglądarce, na serwerze i pozwala szybko zobaczyć efekty pracy."
    );
}

function dodajHobby() {
    const hobby = [
        "Podróże",
        "Muzyka",
        "Sport",
        "Tworzenie stron WWW",
        "Uczenie się nowych technologii"
    ];

    const lista = document.getElementById("hobby-list");
    const noweHobby = hobby[Math.floor(Math.random() * hobby.length)];

    const li = document.createElement("li");
    li.textContent = noweHobby;

    lista.appendChild(li);
}
