class Jogo {
    constructor() {
       this.inimigoAtual = 0
    }
    
    setup() {
        cenario = new Cenario(imagemCenario, 2.5)
        pontuacao = new Pontuacao()
    
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270)
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100)
        const inimigoGotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imagemGotinhaVoadora, width - 52, 200, 100, 75, 200, 150, 10, 100)
        const inimigoTroll = new Inimigo(matrizInimigoGrande, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 10, 100)
        
        inimigos.push(inimigo)
        inimigos.push(inimigoGotinhaVoadora)
        inimigos.push(inimigoTroll)
    }
    
}
