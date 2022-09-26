const valores = [1, 60, 232, 7, 25, 76, 29,74, 92]

const lista = valores.filter(valores => valores > 60 && valores < 300)

var somatorio = 0
function somar(lista){
    somatorio += lista;
}

lista.forEach(somar)

console.log(`A lista dos valores maiores que 60 é: ${lista}. A soma dos elementos da lista é: ${somatorio}`)