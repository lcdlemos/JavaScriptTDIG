function soma(){
    let soma = 0                                        //Valor padrao da soma quando nao vier numeros
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 3.3, "Teste", 4.4, 5.5))    //Ao entras string, concatena, e depois tudo que vier sera concatenado
console.log(soma('a', 'b', 'c'))
console.log(soma([1, 2, 3, 4, 5], 5))