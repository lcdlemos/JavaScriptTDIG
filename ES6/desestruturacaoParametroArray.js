function randomizar([min = 0, max = 1000]){
    if(min > max)[min, max] = [max, min]    //inversao utilizada para trocar min e max, pois devem estar na ordem
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)                //ceil para cima 
}

console.log(randomizar([50, 40]))
console.log(randomizar([992]))          //Vai substituir o minimo, pois e o primeiro argumento
console.log(randomizar([, 10]))
console.log(randomizar([]))
//console.log(randomizar())           //Novamente gera um erro de excecao porque esta esperando algo para desestruturar