var nome = "Roberto Raposo Franco";
var cargo = "Desenvolvedor"

var cargoHtml = document.getElementById("cargo-no-html");
var nomeHtml = document.getElementById("nome-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNome (nome){
    nomeHtml.innerHTML = nome;
}

function colocarCargo (cargo){
    cargoHtml.innerHTML = cargo;
}

function logarNome(){
    console.log(nome)
}

function clicarexp() {
    console.log("Clicou no botão Experiências");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clicarresumo() {
    console.log("Clicou no botão Resumo");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNome(nome);
colocarCargo(cargo);
