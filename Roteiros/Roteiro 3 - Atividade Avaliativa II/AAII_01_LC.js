const entrega = Math.floor(Math.random() * (25 - 1) + 1)
const revisado = Math.ceil(Math.random() * (25 - entrega) + entrega)

if(entrega <= 19){
    console.log(`
    Data da entrega: ${entrega}
    Data da revisão: ${revisado}
    Muito bem! O aluno está apto a apresentar até o natal!`)
}

else if(entrega >= 20 && entrega <= 22){
    if(revisado <= 23){
        console.log(`
        Data da entrega: ${entrega}
        Data da revisão: ${revisado}
        O trabalho está muito ruim! TCC Apresentado!`)
    }
    else{
        console.log(`
        Data da entrega: ${entrega}
        Data da revisão: ${revisado}
        O trabalho está muito ruim! Não deu! Só no próximo ano agora.`)
    }
}

else{
    console.log(`
    Data da entrega: ${entrega}
    Eu odeio o prof. Florovsky!`)
}