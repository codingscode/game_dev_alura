class Pontuacao {
    constructor() {
       this.pontos = 0
    }

    exibe() {
       fill('white')
       textSize(50)
       text(this.pontos, width - 30, 50)
    }
}