var a = 3
let b = 4   //Chegou no ES6

var a = 30  //var nao obedece a constexto de bloco, ele e variavel global
b = 40

const c = 5

console.log(a, b, c)

for(var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i = ', i)

for(let j = 0; j < 10; j++){    //Se nao for definida a variavel como local ou global, ela sera var por padrao
    console.log(j)
}
//console.log('j = ', j)          //Gera um erro porque i nao foi definido fora do contexto do bloco, por isso nao tem como acessa-la

const functions = []

for(var k = 0; k < 10; k++){
    functions.push(function(){      //Push para colocar elementos dentro do array
        console.log(k)
    })            
}

functions[2]()
functions[5]()
functions[9]()                      //Vai exibir sempre o valor final de i no for, no caso, sempre 10

const functions2 = []
for(let w = 0; w < 10; w++){
    functions2.push(function(){      //Push para colocar elementos dentro do array
        console.log(w)
    })            
}

functions2[2]()
functions2[5]()
functions2[9]()                     //Vai exibir o valor do i no momento chamado, no caso, 2, 5 ou 9