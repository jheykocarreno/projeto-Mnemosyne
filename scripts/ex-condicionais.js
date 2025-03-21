//------------------------- NIVEL BASICO -------------------------
//1- Verificar se um número é positivo, negativo ou zero
// let numero = prompt("Inserir um numero");
// numero = parseInt(numero);

// if (numero > 0){
//     console.log("Numero positivo");
// } else if (numero < 0){
//     console.log("Numero negativo");
// } else {
//     console.log("Numero é ZERO");
// }


//2- Verificar se um número é par ou ímpar
// let numero2 = prompt("Inserir um numero");
// numero2 = parseInt(numero2);

// if (numero2 % 2 == 0){
//     console.log("É numero PAR");
// } else{
//     console.log("É numero IMPAR")
// }


//3- Classificação de idade
// let idade = prompt("Inserir idade");
// idade = parseInt(idade);

// if (idade < 12){
//     console.log("Criança");
// } else if (idade >=13 && idade <=17){
//     console.log("Adolescente");
// } else {
//     console.log("Adulto");
// }


//4- Aprovação em uma prova
// let nota = prompt("Digite una nota");
// nota = parseInt(nota);

// if (nota >= 60 && nota <= 100){
//     console.log("Aprovado!");
// } else if (nota >= 0 && nota <60){
//     console.log("Reprovado");
// } else {
//     console.log("A nota deve ser de 0 ao 100");
// }


//------------------------- NIVEL INTERMEDIARIO -------------------------
//1- Calculadora simples
// let a = prompt("Inserir primeiro numero");
// a = parseInt(a);
// let b = prompt("Inserir segundo numero");
// b = parseInt(b);
// let oper = prompt("Inserir o operador: + - * /");
// let resultado;

// switch (oper){
//     case '+':
//         resultado = a + b;
//         console.log(resultado);
//         break;
//     case '-':
//         resultado = a - b;
//         console.log(resultado);
//         break;
//     case '*':
//         resultado = a * b;
//         console.log(resultado);
//         break;
//     case '/':
//         resultado = a / b;
//         console.log(resultado);
//         break;
//     default:
//         console.log("Somente aceita as operações + - * /");
// }


//2- Maior entre três números
// let a = prompt("Primeiro numero");
// let b = prompt("Segundo numero");
// let c = prompt("Terceiro numero");

// if (a>=b){
//     if (a>=c){
//         console.log("1- O numero  maior é " + a);
//     } else {
//         console.log("2- O numero  maior é " + c);
//     }
// }else {
//     if (b>=c){
//         console.log("3- O numero  maior é " + b);
//     } else {
//         console.log("4- O numero  maior é " + c);
//     }
// }


//3- Desconto em compras
// let valor = prompt("Inserir valor da compra");
// valor = parseInt(valor);
// let valorNovo;

// if (valor >= 100){
//     valorNovo = valor - (valor * 10/100);
//     console.log("Teve un desconto de 10%. Valor a pagar: " + valorNovo);
// } else {
//     console.log("Valor a pagar: " + valor);
// }


//4- Sistema de login simples
// const usuario = "admin";
// const senha = "1234";

// let usuEnt = prompt("Inserir nome de usuario");
// let senEnt = prompt("Inserir senha");

// if (usuario == usuEnt && senha == senEnt){
//     console.log("Login bem-sucedido");
// }else {
//     console.log("Acesso negado");
// }


//------------------------- NIVEL AVANZADO -------------------------
//1- Classificação de triângulos
// let ladoA = prompt("Inserir o lado A");
// let ladoB = prompt("Inserir o lado B");
// let ladoC = prompt("Inserir o lado C");

// ladoA = parseInt(ladoA);
// ladoB = parseInt(ladoB);
// ladoC = parseInt(ladoC);

// if (ladoA == ladoB && ladoA == ladoC){
//     console.log("É un Triandulo Equilatero");
// } else {
//     if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
//         console.log("É um Triangulo Isosceles");
//     } else{
//         console.log("É um Triangulo Escaleno");
//     }
// }


//2- Conversão de notas para conceitos
//  let nota = parseInt(prompt("Digite una nota"));
//  let resultOk = false;

// if (nota <= 100 && nota >= 90){
//     resultOk = true;
//     console.log("Tem uma nota A");
// }

// if (nota < 90 && nota >= 80){
//     resultOk = true;
//     console.log("Tem uma nota B");
// }

// if (nota < 80 && nota >= 70){
//     resultOk = true;
//     console.log("Tem uma nota C");
// }

// if (nota < 70 && nota >= 60){
//     resultOk = true;
//     console.log("Tem uma nota D");
// }

// if (nota < 60 && nota >= 0){
//     resultOk = true;
//     console.log("Tem uma nota E");
// }

// if (resultOk == false){
//     console.log("A nota deve ser entre 0 e 100");
// }


//3- Cálculo de IMC
// let peso = parseFloat(prompt("Inserior seu peso. ex.: 70.5"));
// let altura = parseFloat(prompt("Inserir sua altura. ex.: 1.70"));
// let imc = peso / altura**2;

// console.log("Teu IMC é de " + imc);

// if (imc < 18.5){
//     console.log("Magreza");
// }
// if (imc >= 18.5 && imc < 25){
//     console.log("Normal");
// }
// if (imc >= 25 && imc < 30){
//     console.log("Sobrepeso");
// }
// if (imc >= 30 && imc < 40){
//     console.log("Obesidade");
// }
// if (imc >= 40){
//     console.log("Obesidade grave");
// }


//4- Validação de ano bissexto
let ano = parseInt(prompt("Digite um ano"));

let resto = ano % 100;

if (resto == 0){
    resto = ano % 400;
    console.log((resto == 0) ? "É ano bisexto 1" : "Não é ano bisexto 1");
} else {
    resto = ano % 4;
    console.log((resto == 0) ? "É ano bisexto 2" : "Não é ano bisexto 2");
}