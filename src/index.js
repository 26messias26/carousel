
let container = document.getElementById('container')
let itens = document.querySelectorAll('.item')
let posi = 0

container.style.width = `${itens.length*304}px`

let tela = window.innerWidth
let contaW = container.offsetWidth

function moveRight(){
    console.log('foi!')
    posi -= tela/2
    console.log(posi)
    
    
    if( posi*-1 > (contaW - tela)){
        console.log('passou!')
        posi += (posi+(contaW - tela))*-1

    }

    container.style.transform = `translateX(${posi}px)`
}

function moveLeft(){
    posi += tela/2
    if (posi > 0){
        posi = 0
    }
    container.style.transform = `translateX(${posi}px)`

    console.log('foi tbm!')
    console.log(posi)
}



console.log(itens.length)

