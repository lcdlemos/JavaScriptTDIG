function imprimirSoma(a, b){
    console.log(a + b)          //Nao retorna nada porque nao foi definido, mas exibe o resultado porque ha um console.log
}

imprimirSoma(3, 4)

imprimirSoma(3)                 //Imprimiu um NaN porque o parametro b não foi definido, entao somou um numero com um undefined

imprimirSoma(3, 5, 6, 7)        //Neste caso, ele soma os 2 primeiros pois ja recebeu os parametros necessarios, o resto descarta

imprimirSoma()                  //Imprimiu um NaN porque nenhum parametro foi definido, somou dois undefined
                                //Se nao ha string, os valores passados serao tratados como numericos, por isso retorna NaN

function sominha(a, b = 1){        //Definindo um valor padrao para o parametro b
    console.log(a + b)
}

sominha(3)                         //Nao retorna mais NaN, e sim um valor, pois o parametro faltante foi substituido pelo valor padrao definido

sominha(3, 6)                      //Neste caso, retorna o valor dos parametros passados, pois sobrescreve o valor padrao definido

sominha()                          //Imprimiu um NaN porque o parametro a não foi definido, entao somou um numero com um undefined

function soma(a = 2, b = 1){        //Definindo um valor padrao para o parametro a e b
    console.log(a + b)
}

soma()                              //Retorna a soma padrao dos valores definidos para a e b

const aluno = function(a, b){       //Funcao anonima associada para uma variavel 
    console.log(a + b)
}

aluno.cpf = '052.222.222-30'        //Variavel tratada como objeto

const soma_02 = function(a, b){     //Funcao anonima agora e soma_02 e tratada como funcao
    console.log(a + b)
}

soma_02(5, 6)

let soma_03 = function(a, b){     //Funcao anonima agora e soma_03 e tratada como funcao
    console.log(a + b)
}

soma_03 = (a, b) => console.log(a + b)  //Nova forma de usar funcao anonima, Arrow Function

soma_03(12, -5)

subtracao = (a, b) => a - b             //Esta funcao nao ha retorno nem exibicao

console.log(subtracao(5, 6))            //Usa-se o console.log para mostrar o resutlado da arrow function

const multiplicacao = a => console.log(a * a)

multiplicacao(5)