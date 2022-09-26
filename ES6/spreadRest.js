//operador rest - agrupar
function total(...numeros){ //junta todos os parâmetros dentro de um array
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

//agrupou em uma estrutura do tipo array
//console.log(total(2, 3, 4, 5))

//... como parâmetro de função é rest
//... como atributo de objeto é spread

/*
//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }    //funcionário é um objeto
const clone = { ativo: true, ...funcionario }       //traz os outros atributos do objeto mencionado
console.log(clone)
*/

//usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']  //o uso do spread coloca cada elemento dentro do array
console.log(grupoFinal)