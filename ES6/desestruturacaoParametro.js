function randomizar({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {nome: 'Demetrio', max: 50, min: 40}

console.log(randomizar(obj))            //Passa o objeto declarado
console.log(randomizar({min: 955}))     //vai usar o limite do padrao max
console.log(randomizar({}))             //Vai usar os limites do padrao
//console.log(randomizar())               //Vai gerar um erro de excecao