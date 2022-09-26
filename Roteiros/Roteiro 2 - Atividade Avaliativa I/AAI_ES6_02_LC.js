const progressaoAritmetica = ({n = 10, a1 = 1, r = 2}) => { //Parametros padrão
    let soma = 0
    let termos = []
    
    for (let i = 0; i < n; i++) {
        termos[i] = a1 + i * r
        soma += termos[i]
    }
    console.log("PA = " + termos)
    console.log("Soma da PA = " + soma)
  }
  
  const progressaoGeometrica = ({n = 10, a1 = 1, r = 2}) => { //Parametros padrão
    let soma = 0
    let termos = []
    
    for (let i = 0; i < n; i++) {
        termos[i] = a1 * r ** i
        soma += termos[i]
    }
    console.log("PG= " + termos)
    console.log("Soma da PG = " + soma)
  }
  
  const objeto = {id: 1, nome: 'objetoParaCalculo', n: 5, a1: 2, r: 3}
  
  console.log(`
  PA e PG USANDO VALORES PADRÃO`)
  progressaoAritmetica({})      //Chama com valores padrão
  progressaoGeometrica({})

  console.log(`
  PA e PG USANDO VALORES DO OBJETO`)
  progressaoAritmetica(objeto)  //Chama com os parâmetros do objeto
  progressaoGeometrica(objeto)

  console.log(`
  PA e PG USANDO VALORES DESESTRUTURADOS 1`)
  progressaoAritmetica({n:3, a1:2, r:2})      //Chama com valores em desestruturação
  progressaoGeometrica({n:3, a1:2, r:2})

  console.log(`
  PA e PG USANDO VALORES DESESTRUTURADOS 2`)
  progressaoAritmetica({n:5, r:2})      //Chama com valores em desestruturação e padrão
  progressaoGeometrica({a1:2, r:2})