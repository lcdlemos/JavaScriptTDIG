//com promise
const { rejects } = require('assert')
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://localhost:8080/ProjetoJSP/arq/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try{
                    callback(JSON.parse(resultado))     //passa a função callback como parâmetro qualquer que seja
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}

/*
let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

*/
getTurma('D').catch(e => console.log(e.message))