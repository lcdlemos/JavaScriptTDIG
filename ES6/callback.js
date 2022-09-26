const alunos = ["Dandaro", "Gustava", "Luano"]  //Para cada um desses valores, tera um value, index e array completo

/*function imprimir(nome, indice){
    console.log(`${indice + 1}.${nome}`)       //Neste ponto ele imprimi o indice + 1 e o nome usando o template string
}*/

const func = a => a + a
function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome} -> ${func(nome)}`)
}

alunos.forEach(imprimir)        //foreach callback function

//Ao lidar com callback functions ela espera tres prametros, sendo passados ou nao: value, index, function

const notas = [7.7, 6.5, 5.2, 8.9, 7.1, 9.0, 3.6]

//Sem callback
const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        //push = adicionar elementos em um array
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)

/*const notasAltas2 = notas.filter(function (nota){
    return nota >= 7
})
console.log(notasAltas2)*/

//Transformando em Arrow Function
const notasAltas2 = notas.filter(nota => nota >= 7)
/*const filtroMaiorQue7 = nota => nota >= 7
const notasAltas2 = notas.filter(filtroMaiorQue7)*/
console.log(notasAltas2)