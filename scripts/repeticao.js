//FOR - Contando de 1 a 5
// console.log("----------- De 1 ao 5 -----------");
// for(let i = 1; i <= 5; i++){
//     console.log("Numero: " + i);
// }

//FOR - Apenas numero pares de 2 a 10
// console.log("----------- Numeros pares -----------");
// for(let i = 2; i <= 10; i+=2){
//     console.log("Numero: " + i);
// }

//FOR - Tabuada do 2
// console.log("----------- Tabuada do 2 -----------");
// for(let i=0; i<=10; i++){
//     console.log(i + " x 2 = " + i*2);
//     console.log(`2 x ${i} = ${2*i}`);       // outra maneira de fazer.
// }

//FOR - Contar de 1 até N
// console.log("----------- Contar até n -----------");
// let n = parseInt(prompt("Inserir N:"));

// for(let i=1; i<=n; i++){
//     console.log("Numero: " + i);
// }

//WHILE - Contagem regresiva
//console.log("----------- Contagem regresiva -----------");
// let contador = 10;
// while (contador > 0){     //em quanto contador sea maior a 0
//     console.log("Contagem: " + contador);
//     contador--;
// }

//WHILE - Fazer uma soma
// console.log("----------- Fazer uma soma -----------");
// let soma = 0;
// let i = 1;
// while (i <= 10){
//     (soma += i);      // soma = soma + i
//     console.log("O resultado atual de soma é " + soma);
//     i++;
// }
// console.log("A soma total dos 10 primeiros numeros é: " + soma);

//DO / WHILE - Garante a execução pelo menos 1 vez
// let numero = 1;
// do{
//     console.log("Numero: " + numero);
//     numero++;
// } while (numero <= 5);

//FOREACH
let numeros = [1, 2, 3, 4, 5];

// numeros.forEach(function(numero) {
//    console.log("Numero: " + numero); 
// });

for(let i=0; i<=numeros.length - 1; i++){
    console.log(`Possição: ${i} tem o valor ${numeros[i]}`);
}