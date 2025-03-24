// ------------------------ FUNCAO FILTER ------------------------ //
//filtrar numeros maiores que 2
// let numeros = [1,2,3,4,5,6];
// let maior = numeros.filter(numero => numero > 2);
// console.log(maior);

//filtrar nomes
// let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Fernanda"];
// let nomesLongos = nomes.filter(nome => nome.length >5);
// console.log(nomesLongos);

//filtrando numeros pares
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let pares = numeros.filter(numero => numero % 2 === 0);
// console.log(pares);

//filtrando objetos, onde a idade é maior que 18.
// let pessoas = [
//     {nome: "Lucas", idade: 17 },    //criação de objeto
//     {nome: "Mariana", idade: 22 },
//     {nome: "Pedro", idade: 15 },
//     {nome: "Juliana", idade: 30 }
// ];

// let adultos = pessoas.filter(pessoa => pessoa.idade > 18);
// console.log(adultos);

// ------------------------ FUNCAO FIND ------------------------ //
// FIND retorna o primeiro elemento da lista correspondente a condição.

//procupara um produto pelo preço
// const produtos = [
//     {id: 1, nome: "Teclado", preco: 100},
//     {id: 2, nome: "Mouse", preco: 50},
//     {id: 3, nome: "Monitor", preco: 700},
//     {id: 4, nome: "PC", preco: 800}
// ];

// const produtoCaro = produtos.find(produto => produto.preco === 700);
// console.log(produtoCaro);

//encontrat numero maior que 10
// let numeros = [5, 8, 12, 20, 3, 15];
// let encontrado = numeros.find ( numero => numero > 10);
// console.log(encontrado);            // resultado 12, o primeiro numero que satisface a condição.

//buscar por un nome, pela primeira letra
//  let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Cátia"];
//  let nomeEncontrado = nomes.find(nome => nome.startsWith("C"));
//  console.log(nomeEncontrado);

//Encontrar um objeto em um array
// let pessoas = [
//     {nome: "Lucas", idade: 17 },    //criação de objeto
//     {nome: "Mariana", idade: 22 },
//     {nome: "Pedro", idade: 15 },
//     {nome: "Juliana", idade: 30 }
// ];

// let adulto = pessoas.find(pessoa => pessoa.idade >= 18);
// console.log(adulto);

// ------------------------ FUNCAO MAP ------------------------ //
//Percorre uma array e retorna um novo array modificado

//Multiplicar todos os numero x2
// const numeros = [1, 2, 3, 4, 5];

// const numerosDobrados = numeros.map(numero => numero * 2);
// console.log(numerosDobrados);

//criando um array de nomes a partir de objetos
// let pessoas = [
//     {nome: "Carlos", idade: 25 },    //criação de objeto
//     {nome: "Ana", idade: 30 },
//     {nome: "Bruno", idade: 20 }
// ];

// let nomes = pessoas.map(pessoa => pessoa.nome);
// console.log(nomes);

//criando frases com informações de objetos
// let pessoas = [
//     {nome: "Carlos", idade: 25 },    //criação de objeto
//     {nome: "Ana", idade: 30 },
//     {nome: "Bruno", idade: 20 }
// ];

// let frase = pessoas.map(pessoa => `${pessoa.nome} tem ${pessoa.idade} anos`);
// console.log(frase);

//deixando nomes em maiusculo e adicionando sufixo
// const nomes = ["ana", "bruno", "carla"];

// const nomesMaiusculos = nomes.map(nome => "Colaborador: " + nome.toUpperCase());
// console.log(nomesMaiusculos);


// ------------------------ FUNCAO REDUCE ------------------------ //

//somar todos os numeros do array
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(soma);

//verificar maior numero dentro dum array
// const numeros = [10, 5, 8, 20, 3];

// const maiorNumero = numeros.reduce((max, numero) => {
//     if (numero > max){
//         return numero;
//     } else {
//         return max;
//     }
// } , numeros[0]);

// console.log(maiorNumero);

//contar a frequencia de palavras
// const palavras = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

// const contagem = palavras.reduce((acumulador, palavra) => {
//     acumulador[palavra] = (acumulador[palavra] || 0) + 1;
//     return acumulador;
// }, {});

// console.log(contagem);

//calcular media de notas
// const notas = [7,8,9,6,10];
// const media = notas.reduce((total, nota) => total + nota , 0) / notas.length;

// console.log(media);

// ------------------------ USO COMBINADO ------------------------ //
const usuarios = [
    {id:1, nome:"Alice",idade:25},
    {id:2, nome:"Bob",idade:30},
    {id:3, nome:"Carol",idade:20}
];

//filtrar usuarios com idade maior que 21
const maioresDeIdade = usuarios.filter(usuario => usuario.idade > 21);

//encontrar o primeiro usuario com idade maior que 21
const usuarioMaior = usuarios.find(usuario => usuario.idade > 21);

//criar uma array apenas com os nomes dos usuarios
const nomeUsuario = usuarios.map(usuario => usuario.nome);

//somar todas as idades dos usuarios usando Reduce
const somaIdade = usuarios.reduce((soma, usuario) => soma + usuario.idade, 0);

console.log("Maiores de idade " , maioresDeIdade);
console.log("Usuario maior de idade " , usuarioMaior);
console.log("Nomes de usuario  " + nomeUsuario);
console.log("Soma de idades " + somaIdade);