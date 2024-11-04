var leonardo = document.getElementById("leonardo");
var samantha = document.getElementById("samantha");
var bruna = document.getElementById("bruna");
var setaDireita = document.getElementById("setaDireita");
var setaEsquerda = document.getElementById("setaEsquerda");

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaDireita.style = "display:flex; margin-top;55px"
    setaEsquerda.style = "display:flex; margin-top;55px"
}

function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaDireita.style = "display:flex; margin-top;55px"
    setaEsquerda.style = "display:flex; margin-top;55px"
}