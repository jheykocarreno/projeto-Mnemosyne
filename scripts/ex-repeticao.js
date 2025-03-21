//------------------------- NIVEL BASICO -------------------------
//1-Contagem de 1 a 10 utilizando FOR
// for(let i=1; i<=10; i++){
//     console.log(i);
// }


//2-Tabuada de um número
// let n = parseInt(prompt("Inserir numero para Tabuada:"));

// for(let i=1; i<=10; i++){
//     console.log(i + " x " + n + " = " + i*n);
// }


//3-Soma dos primeiros N números naturais
//  let n = parseInt(prompt("Inserir numero"));
//  let soma = 0;

//  for(let i = 0; i <= n; i++){
//      soma +=i;
//  }
//  console.log("FOR: " + soma);

// let i = 1;
// soma = 0;
// while(i<=n){
//     (soma +=i) ;
//     i++;
// }
// console.log("WHILE: " + soma);


//------------------------- NIVEL INTERMEDIO -------------------------
//1-Exibir os números pares de 1 a 50
// for(let i = 2; i <= 50; i+=2){
//     console.log("Numero: " + i);
// }

// let i = 0;
// while(i<=50){
//     console.log("Numero 2: " + i);
//     i+=2;
// }


//2-Jogo de adivinhação
// let aleatorio = Math.floor(Math.random() * (10-1+1) + 1);
// console.log(aleatorio);
// let achou = false;
// let entrada = 0;

// do{
//     entrada = parseInt(prompt("Inserir numero do 1 ao 10"));
//     if (aleatorio == entrada){
//         console.log("ACHOUUUUUU");
//         achou = true;
//     } else {
//             console.log ("Intenta novamente");
//     }
// } while (achou==false);


//3-Contagem regressiva
// let num = parseInt(prompt("Inserir numero"));
// while (num >= 0){     //em quanto contador sea maior a 0
//     console.log("Contagem regressiva: " + num);
//     num--;
// }


//------------------------- NIVEL AVANZADO -------------------------
//1- Soma dos dígitos de um número
let numero = prompt("Inserior numero de 2 digitos");

let dig1 = numero.substring(0,1);
let dig2 = numero.substring(1,1);

console.log(dig1);
console.log(dig2);

let numero2 = parseInt(numero);


