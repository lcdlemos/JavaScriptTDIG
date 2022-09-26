const [a] = [10]        //Para desestruturar em arrays, usa-se colchetes. Em objetos foram chaves
console.log(a)

const [n1, n2, n3] = [10, 7, 9, 17]      //Esta desestruturando os tres primeiros por padrao
console.log(n1, n2, n3)

const [n4, n5, , n6] = [10, 7, 9, 17]      //Esta desestruturando os dois primeiros e o quarto, descartando a posicao 3
console.log(n4, n5, n6)

const [, [, notaBaixa]] = [[, 8, 8], [9, 6, 8]] //Nao precisa ir ate o fim, chega-se ate o elemento deseja descartando os que vem antes dele
console.log(notaBaixa)

const[[, , maiorNota1], [maiorNota2]] = [[, 8, 8], [9, 6, 8]]
console.log(maiorNota1, maiorNota2)