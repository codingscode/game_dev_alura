
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
    background(imagemCenario)
    image(imagemPersonagem, 0, 0)
    /* circle(mouseX, mouseY, 100) */
    /* console.log('algo infinito...') */


}




