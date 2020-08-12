var nome;

var idade;

var idade1;

var idade2;

var frase;

var frutas;

var botao;

var agradecimento;

var data;

var fruta;

var count;

//FUNCAO 
function soma(n1, n2) {

    return n1 + n2;

}

function botao() {

    alert("Botão!");

}

function teste() {

    alert("TESTANDO");

}

nome = "Gabriel Gameleira dos Santos"; //TIPO STRING

idade = prompt("Qual a sua idade?");

idade1 = 29; //TIPO NUMBER

idade2 = 19;

frase = "Corinthians é o melhor time do mundo!";

frutas = ["maça", "pera", "laranja"]; //TIPO ARRAY

botao = document.querySelector("input"); //NO DOCUMENTO BUSCAR UM ELEMENTO PELA TAG

agradecimento = document.getElementById("agradecimento"); //NO DOCUMENTO BUSCAR UM ELEMENTO PELO ID

data = new Date(); //TIPO DATA

fruta = {

        nome: "Maça",

        cor: "Red",

    } //DEFINICAO DE OBJETO

count = 0;

alert(soma(15, 24));

alert(nome + " têm " + idade); //EXIBI UMA MENSAGEM PELO ALERTA NA TELA

alert(idade1 + idade2);

console.log(idade1 + idade2); //EXIBI UMA MENSAGEM NO CONSOLE

console.log(frase.replace("Corinthians", "Bayern")); //A FUNCAO REPLACE E UMA FUNCAO PARA TIPO STRING PARA SUBSTITUIR O PRIMEIRO VALOR PELO SEGUNDO

console.log(frase.toLocaleLowerCase()); //A FUNCAO TOLOCALELOWERCASE E UMA FUNCAO PARA TIPO STRING QUE DEIXA A STRING COM TODOS OS CARACTERES EM LETRAS MINUSCULAS

console.log(frutas[1]);

frutas.push("UVA"); //A FUNCAO PUSH E UMA FUNCAO PARA TIPO ARRAY QUE ADICIONA UM VALOR NA ULTIMA POSICAO DO ARRAY

console.table(frutas);

console.log(frutas.length); //A FUNCAO LENGTH E UMA FUNCAO PARA TIPO ARRAY QUE APRESENTA O VALOR DO TAMANHO DO ARRAY

console.log(frutas.reverse()); //A FUNCAO REVERSE E UMA FUNCAO PARA TIPO ARRAY QUE INVERTE AS POSICOES DO ARRAY

console.log(frutas.toString()); //A FUNCAO TOSTRING E UMA FUNCAO PARA TIPO ARRAY QUE CONVERTE OS VALORES DO ARRAY PARA STRING

console.log(frutas.join(";")); //A FUNCAO TOSTRING E UMA FUNCAO PARA TIPO ARRAY QUE REMOVE AS VIRGULAS COMO SEPARADOR PARA PONTO E VIRGULA

frutas.pop(); //A FUNCAO POPO E UMA FUNCAO PARA TIPO ARRAY QUE REMOVE A ULTIMA POSICAO DO ARRAY

console.log(frutas);

//CONDICIONAL
if (idade < 18) {

    alert("Menor de idade!");

} else {

    alert("Maior de idade!");

}

//REPETICAO
while (count <= 5) {

    console.log(count);

    count++;

}

for (var i = 0; i < 10; i++) {

    console.log(i);

}

console.log(data);

console.log(data.getDate()); //BUSCA O DIA

console.log(data.getHours()); //BUSCA A HORA

console.log(data.getFullYear()); //BUSCA O ANO

agradecimento.innerHTML = "OIIIIEE"; //ALTERA O CONTEUDO HTML 

// agradecimento.onmouseover = botao; //QUANDO O MOUSE ESTIVER SOBRE

// agradecimento.onmouseout = teste; //QUANDO O MOUSE ESTIVER FORA

// agradecimento.onmousemove = teste;

// agradecimento.onchange = teste; MUDAR QUANDO O VALOR DO SELECT MUDAR

botao.addEventListener("click", botao); //ESCUTANDO O EVENTO DE CLICK

window.open("https://github.com/GAMELEIRA"); //ABRE UMA NOVA GUIA NO NAVEGADOR PARA UMA URL

//window.location.href = "https://github.com/GAMELEIRA"; //ABRE NA MESMA GUIA NO NAVEGADOR PARA UMA URL

window.onload = teste;