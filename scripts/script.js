// console.log("Hello World");

// var nome = "Jheyko";
// let idade = 41;
// const profissao = "Aluno"
// let maiorIdade = true;
// let temFilhos = false;

// // console.log(nome);
// // console.log(idade);
// // console.log(profissao);

// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof maiorIdade);
// console.log(typeof temFilhos);

// let a = 10;
// let b = "2";
// let c = "casa";
// let d = 50;
// let e = "50";

// console.log(a + b);
// console.log(c + a);
// console.log(a + d);
// console.log(a - b);

// // console.log(a < d);
// // console.log(a > d);
// // console.log(e === d);
// // console.log(e == d);
// console.log(a !== d);
// console.log(e != d);

// console.log(typeof b);
// b = Number(b);
// console.log(a + b);
// console.log(typeof b);

// console.log(typeof d);
// d = toString(d);
// console.log(typeof d);

// let nome = "Jheyko";
// let idade = 41;
// const profissao = "Aluno";

// console.log("Ola, meu nome é " + nome + ", tenho " + idade + " anos de idade");

// let mensagem = "Ola. meu nome é " + nome;
// console.log(mensagem);

// mensagem = `Hola, mi nombre é ${nome}, y tengo ${idade} años. Soy ${profissao}`;
// console.log(mensagem);

//------------ CONDICIONALES -------------
//IF simples
// let idade = prompt("Digite sua idade: ");

// if (idade >= 18){
//     console.log("Voce é maior de idade");
// }

//IF e ELSE
// let temperatura = 25;

// if (temperatura > 25){
//     console.log("Esta calor");
// }else{
//     console.log("Esta fresquinho");
// }

// IF - ELSE IF - ELSE
// let nota = 11;

// if (nota > 10){
//     console.log ("A nota não pode ser maior de 10");
// } else if (nota >= 6){
//     console.log ("Aprovado");
// } else {
//     console.log ("Esta de recuperação");
// }

// OPERADOR TERNARIO / IF TERNARIO
// let saldo = prompt("Digite saldo: ");
// let podeComprar = saldo >= 100 ? "Compra aprovada" : "Saldo insuficiente";
// console.log (podeComprar);

//SWITCH
// let dia = prompt("Digite o dia: ");
// console.log(typeof dia);
// switch (dia) {
//     case '1':
//         console.log("Domingo");
//         break;
//     case '2':
//         console.log("Segunda-feira");
//         break;
//     case '3':
//         console.log("Terça-feira");
//         break;
//     case '4':
//         console.log("Quarta-feira");
//         break;
//     case '5':
//         console.log("Quinta-feira");
//         break;
//     case '6':
//         console.log("Sexta-feira");
//         break;
//     case '7':
//         console.log("Sábado");
//         break;
//     default:
//         console.log("Dia invalido, somente 1 ao 7");
//         break;
// }

//CONDICIONAL ANINHADA
//IF DENTRO DE IF
// let idade = 19;
// let temCarteira = true;

// if (idade >= 18){
//     if (temCarteira){
//         console.log("Você pode dirigir");
//     } else {
//         console.log("Voce precisa tirar sua carterra de motorista");
//     }
// } else {
//     console.log("Voce não pode dirigir");
// }

//CONDICAO ANINHADA
//MULTIPLAS VERIFICAÇÕES

let hora = prompt("Digita hora");
hora = parseInt(hora);                      //convertemos String para Int
console.log(hora);
let diaDaSemana = prompt("Digita o dia");
console.log(diaDaSemana);

if (hora >= 6 && hora < 12){
    console.log("Bom dia");
} else {
    if (hora >= 12 && hora < 18){
        if (diaDaSemana == "segunda"){
            console.log("Boa tarde! Ótima semana!");
        } else {
            console.log("Boa tarde");
        }
    }
}