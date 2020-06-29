
let imagemCenario
let imagemPersonagem
let cenario
let somDoJogo
let personagem


function preload() {
  imagemCenario = loadImage('./imagens/cenario/floresta.png')
  imagemPersonagem = loadImage('./imagens/personagem/correndo.png')
  somDoJogo = loadSound('./sons/trilha_jogo.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    cenario = new Cenario(imagemCenario, 2.5)
    personagem = new Personagem(imagemPersonagem)
    somDoJogo.loop() // quando a musica termina repete
}

function draw() {
    cenario.exibe()
    cenario.move()
    
    personagem.exibe()
}









