
function preload() {
    imagemCenario = loadImage('./imagens/cenario/floresta.png')
    imagemFimdeJogo = loadImage('./imagens/assets/game-over.png')
    imagemPersonagem = loadImage('./imagens/personagem/correndo.png')
    imagemInimigo = loadImage('./imagens/inimigos/gotinha.png')
    imagemInimigoTroll = loadImage('./imagens/inimigos/troll.png')
    imagemGotinhaVoadora = loadImage('./imagens/inimigos/gotinha-voadora.png')
    imagemTelaInicial = loadImage('./imagens/cenario/telaInicial.png')
    imagemVida = loadImage('./imagens/assets/coracao.png')
    fonteTelaInicial = loadFont('./imagens/assets/fonteTelaInicial.otf')
    fita = loadJSON('./fita/fita.json')
    somDoJogo = loadSound('./sons/trilha_jogo.mp3')
    somPulo = loadSound('./sons/somPulo.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    
    frameRate(26)
    somDoJogo.loop() // quando a musica termina repete
    jogo = new Jogo()
    telaInicial = new TelaInicial()
    jogo.setup()
    cenas = {jogo: jogo, telaInicial: telaInicial} // ou apenas {jogo, telaInicial} nome de propriedade se mesmo da variavel recebida
    botaoGerenciador = new BotaoGerenciador('Iniciar Jogo', width/2 - 48, height*0.45)
}

function keyPressed() {
    jogo.keyPressed(key)
}

function draw() {
    cenas[cenaAtual].draw()
}









