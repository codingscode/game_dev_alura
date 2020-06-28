
let imagemCenario
let imagemPersonagem

function preload() {
  imagemCenario = loadImage('./imagens/cenario/floresta.png')
  imagemPersonagem = loadImage('./imagens/personagem/correndo.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    
}

function draw() {
    image(imagemPersonagem, 0, height - 135, 110, 135, 0, 0, 220, 270) // (+) 1ª figurinha, dimensoes alt e larg
    
}

class Cenario {
    constructor(imagem, velocidade) {
        this.imagem = imagem
        this.velocidade = velocidade
    }

    exibe() {
        image(this.imagemCenario, -50, 0, width, height)
        image(this.imagemCenario, width-50, 0, width, height)
      
    }
}







