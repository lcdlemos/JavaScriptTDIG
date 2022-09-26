const soma5Pares = x =>{
    let soma = 0
    if(x % 2 != 0){
        x++
    }
    for(let i = 0; i < 5; i++){
        soma += x
        x += 2
    }
    return soma
}
let x = 4
console.log(`Entrada: ${x} => Saída: ${soma5Pares(x)}`)
x = 11
console.log(`Entrada: ${x} => Saída: ${soma5Pares(x)}`)