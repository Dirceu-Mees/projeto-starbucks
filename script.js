
let circulo = document.querySelector(".circulo")
let imagem = document.querySelector(".copo")    

function trocarCor(cor){
    circulo.style.background = cor
}

function trocarImagem (endereco) {
    imagem.src = endereco
}