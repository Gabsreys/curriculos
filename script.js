// Mensagem de boas-vindas ao abrir o site
window.onload = function () {
    alert("Seja bem-vindo ao meu currículo online!");
};


// Mensagem ao clicar nos links do menu
const links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Você acessou uma seção do currículo.");
    });
});