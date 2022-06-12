
//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 22
let maiorIdade = 18
if (idade >= maiorIdade)
console.log('você é maior de idade, então pode passar');

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
if ( maiorIdade = true)
console.log('você é maior de idade, então pode passar!');


//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let meses = ["jan", "fev", "mar", "abr", "mai" , "jun" , "jul", "ago", "set", "out" ,"nov", "dez"]
let mesesAniversario = [meses.shift(0,11)]
if( mesesAniversario == "jan" && "dez"){
console.log('você faz aniversário em Janeiro ou em Dezembro')
}


//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let letrasNome = ["R","U", "A","N"]
let primeiraLetra = [letrasNome.shift(0)]
if(primeiraLetra == 'R')
console.log('A primeira letra do seu nome começa com R')

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let seuNome = ["E" ,"d" ,"y"]
let sobrenome = ["m","e","n","e","z","e","s"]
let primeiraLetraNome = [seuNome.shift(0)]
let numeroDeLetras = (sobrenome.length)
if (numeroDeLetras >=7 || primeiraLetraNome == 'E' )
    console.log('seu sobrenome tem mais de 6 letras ou começa com a letra E')