var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var preto = "cinza";
var prestacao = 750;


var soma = branco == "branco";
document.getElementById("ex_1").innerHTML = "1) " + "var branco" + " == " + "branco " + "= " + soma;

var soma = branco == cinza;
document.getElementById("ex_2").innerHTML = "2) " + "var branco" + " == " + "var cinza " + "= " + soma;

var soma = carro === branco;
document.getElementById("ex_3").innerHTML = "3) " + "var carro" + " === " + "var branco " + "= " + soma;

var cavalo = carro == "preto" ? "cinza" : "marron";
document.getElementById("ex_4").innerHTML = "4) " + cavalo;

var parcelas = (valor - 3000) / 750
document.getElementById("ex_5").innerHTML = "5) " + parcelas + " parcelas";

var soma = branco + preto + cinza;
document.getElementById("ex_6").innerHTML = "6) " + soma + " " + soma.length + " letras";

