const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && password) {
        localStorage.setItem("usuario", username);
        localStorage.setItem("senha", password);

        // Redireciona para a "área logada"
        window.location.href = "index.html";
    } else {
        alert("Por favor, preencha os dois campos.");
    }
});