function imprimirSoma(a, b){
    console.log(a+b)
}

//imprimirSoma(3, 4)
//imprimirSoma(3)
//imprimirSoma(3, 5, 6, 7)
//imprimirSoma()

function soma(a = 2, b = 1){
    console.log(a+b)
}

//soma(3, 6)
//soma(3)
//soma()

let soma_02 = function (a, b){
    console.log(a+b)
}

soma_02 = (a, b) => a + b

//console.log(soma_02(5, 6))

subtracao = (a, b) => a - b

console.log(subtracao(5, 6))

const multiplicacao = a => console.log(a)

multiplicacao("Que Beleza!")