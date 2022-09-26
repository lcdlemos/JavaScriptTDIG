const pesoElemento = 1.0

const pesoQuimico = Number('2.5')   //Pode coolocar ' ' ou " " tanto faz 

console.log(pesoElemento, pesoQuimico)
console.log(Number.isInteger(pesoElemento)) //O zero decimal transforma o numero em inteiro por isso é verdade
console.log(Number.isInteger(pesoQuimico))  //Alterando para outro valor decimal, o teste retorna falso

const avaliacaoProduto = 9.871
const avaliacaoElemento = 6.871

const total = avaliacaoProduto * pesoElemento + avaliacaoElemento * pesoQuimico
const media = total / (pesoElemento + pesoQuimico)

console.log(media)      //Exibicao em ponto flutuante com o maior numero possivel de precisao
                        //por aumentar velocidade de operacoes aritmeticas. Opcao de Java e Javascript

console.log(media.toFixed(2))   //Usado para determinar a quantidade de casas decimais na representacao do numero real
console.log(media.toString(8))

console.log(typeof media)
console.log(typeof Number)
console.log(typeof Object)

console.log(7/0)        //Divisao por zero retornou infinito devido a representacao da informacao

console.log("10"/2)     //Como ha uma operacao numerica, ele tenta converter uma das partes para numerico antes de operar

console.log("10,2"/2)   //Resulta em NaN porque nao consegue converter o 10,2

console.log(2 + '3')    //Ele concatena o valor com a String, pois essa tem preferencia.
console.log(2 + 3)
console.log(3 + 2)
console.log('3' + 2)

console.log('3' - 2)    //Neste caso ele faz a subtracao, pois nao identifica esta operacao para String

console.log("show!" * 2)    //Como multiplicacao e operador de valores numericos, nao consegue operar sobre a String

console.log((0.1 + 0.7).toFixed(2))
console.log((10.345).toFixed(2))
console.log((10.344).toFixed(2))