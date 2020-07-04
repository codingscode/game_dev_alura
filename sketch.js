



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
    cenario = new Cenario(imagemCenario, 2.5)
    pontuacao = new Pontuacao()

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270)
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100)
    const inimigoGotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imagemGotinhaVoadora, width - 52, 200, 100, 75, 200, 150, 10, 100)
    const inimigoTroll = new Inimigo(matrizInimigoGrande, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 10, 100)
    
    inimigos.push(inimigo)
    inimigos.push(inimigoGotinhaVoadora)
    inimigos.push(inimigoTroll)

    frameRate(26)
    somDoJogo.loop() // quando a musica termina repete
}

function keyPressed() {
    if (key === 'ArrowUp') {
      personagem.pula()  // faz subir
      somPulo.play() // som do pulo
    }
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









