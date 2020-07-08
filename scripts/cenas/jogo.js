class Jogo {
    constructor() {
       this.indice = 0
       this.mapa = fita.mapa
    }
    
    setup() {
        cenario = new Cenario(imagemCenario, 2.5)
        pontuacao = new Pontuacao()
        vida = new Vida(3, 3)
    
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270)
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10)
        const inimigoGotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imagemGotinhaVoadora, width - 52, 200, 100, 75, 200, 150, 10)
        const inimigoTroll = new Inimigo(matrizInimigoGrande, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 10)
        
        inimigos.push(inimigo)
        inimigos.push(inimigoGotinhaVoadora)
        inimigos.push(inimigoTroll)
        
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            personagem.pula()  // faz subir
            somPulo.play() // som do pulo
        }
    }

    draw() {
        cenario.exibe()
        cenario.move()
        vida.draw()
        pontuacao.exibe()
        pontuacao.adicionarPonto()
        
        personagem.exibe()
        personagem.aplicaGravidade()

        const linhaAtual = this.mapa[this.indice]
        const inimigo = inimigos[linhaAtual.inimigo]
        const inimigoVisivel = inimigo.x < -inimigo.largura
        
        inimigo.velocidade = linhaAtual.velocidade

        inimigo.exibe()
        inimigo.move()

        if (inimigoVisivel) {
            this.indice++
            inimigo.aparece()

            if (this.indice > this.mapa.length - 1) {
                this.indice = 0
            }
            
        }
        
        if (personagem.estaColidindo(inimigo)) {
            console.log('colidiu')

            vida.perdeVida()
            personagem.tornarInvencivel()

            if (vida.vidas === 0) {
                image(imagemFimdeJogo, width/2 - 210, height/3)
                noLoop()    
            }
            
        }
    }

    
    
}
