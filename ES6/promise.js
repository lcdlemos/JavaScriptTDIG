//Promise
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        //setTimeOut = recebe em milissegundos, por isso está multiplicado por 1000
        setTimeout(() => {
            //importante = resolve() só recebe um parâmetro
            resolve(frase)
            //reject(frase)
            //reject('Erro!!!') //para lançar a falha
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('?!?'))
    .then(novaFrase => console.log(novaFrase))
    .catch(e => console.log(e))