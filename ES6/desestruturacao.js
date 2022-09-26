let pessoa = {
    nome: 'Demetrio',
    idade: 38,
    endereco: {
        logradouro: 'Rua das Baraúnas',
        numero: 1000
    },
    bemHumorada: false
}

const {nome, idade} = pessoa        //Operador de desestruturacao
console.log(nome, idade)

const {nome: otonome, idade: age, bemHumorada = true} = pessoa      //Mudou a chamada dos parametros, so mostra true se nao existir no objeto
console.log(otonome, age, bemHumorada)                         //Executando sem chamar bemHumorada resulta undefined
                                                            //Mas atribuindo um padrao, retorna o valor definido
                                                            //Se definir este parametro dentro do objeto, sera definido o valor de l

const{ endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)                        //CEP nao foi definido

const{conta: {ag, num}} = pessoa
console.log(ag, num)                            //Vai retornar uma excecao se o objeto nao existir
                                                //Se o objeto existir, ele retorna undefined para o paramtro ou filho

