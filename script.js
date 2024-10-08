document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "chimera" && password === "25074589") {
        window.location.href = "secret-page.html"; // Redireciona para a página secreta
    } else {
        errorMessage.textContent = "Nome de usuário ou senha incorretos!";
    }
});
