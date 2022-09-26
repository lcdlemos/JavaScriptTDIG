function colocarTodasLetrasEmMaiusculoEm500ms(frase){
    return new Promise((resolve, reject) => {
        //setTimeOut = recebe em milissegundos, por isso está multiplicado por 1000
        setTimeout(() => {
            resolve(frase.toUpperCase())
        }, 500)      //Em 500 ms de espera
    })
}

function inverteTodasLetras(frase){
    return new Promise((resolve, reject) => {
            resolve(frase.split('').reverse().join(''))
    })
}

let frase = 'vamos testar se funciona? que Legal!'

colocarTodasLetrasEmMaiusculoEm500ms(frase)
    .then(frase => console.log(frase))

inverteTodasLetras(frase)
    .then(frase => console.log(frase))