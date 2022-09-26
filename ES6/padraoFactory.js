const prod1 = {
    nome: 'camisa',
    preco: 45.00
}
const prod2 = {
    nome: 'calça',
    preco: 145.00
}

//Solução: Factory simples que retorna um novo objeto

function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

//Passando parametros
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1   //Poderia usar valor padrao
    }
}

console.log(criarProduto('Notebook', 2199.99))
console.log(criarProduto('iPad', 1199.99))