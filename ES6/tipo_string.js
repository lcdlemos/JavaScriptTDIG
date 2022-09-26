const universidade = "Universidade Estadual da Paraíba"      //Pode usar aspas simple, ' ', ou aspas duplas, " "

console.log(universidade.charAt(4))     //Imprime caractere na posição 4
console.log(universidade.charAt(300))   //Imprime vazio porque não há caracteres nesta posição

/*for(i = 0; i < universidade.length; i++){
    console.log(universidade.charAt(i))
}*/

console.log(universidade.charCodeAt(4)) //Imprime o código ascii do caractere naquele posição

console.log(universidade.indexOf('e'))  //Imprime a primeira posição do caracter encontrada na String
console.log(universidade.indexOf('z'))  // Retorna -1 se não houver

console.log(universidade.substring(0))
console.log(universidade.substring(13))  //Imprime toda String a partir da posição informada
console.log(universidade.substring(22))
console.log(universidade.substring(25))

console.log(universidade.substring(0, 12))  //Imprime o intervalo desejado da String

console.log('Universidade: '.concat(universidade).concat("!"))  //Concat apenas concatena, e pode ser substituída pelo +
console.log('Universidade: ' + universidade + "!")

console.log(universidade.replace('e', 3))   //Substitui a primeira ocorrencia do caracter pelo que foi informado
console.log(universidade.replace('e', 'XYZ'))

let str = 'Twas the knight before Xmas...'
let newstr = str.replace(/xmas/i, 'Christmas')  //Usou o rejects para substituir, nesse caso, não importa ser case sensitive. O i para iterar sobre toda a String
console.log(newstr)

console.log('Luana, Thiago, José Rennan'.split(','))    //Está sendo criado um array de nomes separados pela vírgula
console.log("1 2 3 4 5 6".split(" "))                   //Está sendo criado um array de números (caracteres) separados pelo espaço