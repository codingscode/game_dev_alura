

function preload() {
    imagemCenario = loadImage('./imagens/cenario/floresta.png')
    imagemFimdeJogo = loadImage('./imagens/assets/game-over.png')
    imagemPersonagem = loadImage('./imagens/personagem/correndo.png')
    imagemInimigo = loadImage('./imagens/inimigos/gotinha.png')
    imagemInimigoTroll = loadImage('./imagens/inimigos/troll.png')
    imagemGotinhaVoadora = loadImage('./imagens/inimigos/gotinha-voadora.png')
    somDoJogo = loadSound('./sons/trilha_jogo.mp3')
    somPulo = loadSound('./sons/somPulo.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    
    frameRate(26)
    somDoJogo.loop() // quando a musica termina repete
    jogo = new Jogo()
    jogo.setup()
}

function keyPressed() {
    jogo.keyPressed(key)
}

function draw() {
    cenario.exibe()
    cenario.move()
    pontuacao.exibe()
    pontuacao.adicionarPonto()
    
    personagem.exibe()
    personagem.aplicaGravidade()

    const inimigo = inimigos[inimigoAtual]
    const inimigoVisivel = inimigo.x < -inimigo.largura
    
    inimigo.exibe()
    inimigo.move()
    if (inimigoVisivel) {
        inimigoAtual++
        if (inimigoAtual > 2) {
            inimigoAtual = 0
        }
        inimigo.velocidade = parseInt(random(10, 20))
    }
     
    if (personagem.estaColidindo(inimigo)) {
         console.log('colidiu')

         image(imagemFimdeJogo, width/2 - 210, height/3)
         noLoop()
    }
    

}









