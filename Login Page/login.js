document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita il comportamento predefinito

        const email = document.getElementById("exampleInputEmail1").value;
        const password = document.getElementById("exampleInputPassword1").value;
        const file = document.getElementById("exampleInputFile").files[0];
        const checked = form.querySelector("input[type='checkbox']").checked;

        console.log("Email:", email);
        console.log("Password:", password);
        console.log("File:", file ? file.name : "Nessun file selezionato");
        console.log("Checkbox selezionata:", checked);

        // Puoi aggiungere qui la logica per inviare i dati al server
        alert("Login effettuato!");
    });
});
