const nome = 'Demetrio'

const stringConcatenada = 'Olá ' + nome + '!'

console.log(stringConcatenada)

const template = `
Olá
${nome}!`     //Usa-se a crase para definir o caracter da template string. Imprime como editado

console.log(template)

console.log(`1 + 1 = ${1 + 1}`)     //Usando template String para representar operações. Tudo dentro do ${} mostra os valores calculados.

/*function semNome(texto){
    return texto.toUpperCase();
}                                 //Seria a sintaxe da função anônima em arrow function
console.log(`Ei... ${semNome('Cuidado')}!`)*/

const caixaAlta = texto => texto.toUpperCase()      //Arrow Function ainda será explicada
console.log(`Ei... ${caixaAlta('Cuidado')}!`)
console.log(`Ei...
${caixaAlta('Cuidado')}!`)
