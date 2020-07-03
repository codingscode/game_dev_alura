class Pontuacao {
    constructor() {
       this.pontos = 0
    }

    exibe() {
       textAlign(RIGHT)
       fill('white')
       textSize(50)
       text(parseInt(this.pontos), width - 30, 50)

    }

    adicionarPonto() {
       this.pontos += 0.1
    }
}