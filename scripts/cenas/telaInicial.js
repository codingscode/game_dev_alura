class TelaInicial {
    constructor() {

    }

    draw() {
       this._imagemDeFundo()
       this._texto()
       this._botao()
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height)
    }

    _texto() {
        textSize(46)
        textFont(fonteTelaInicial)
        textAlign(CENTER)
        text('As aventuras de', width/2, height/4)
        textSize(85)
        text('Hipsta', width/2, height/4 + 75)
    }

    _botao() {
        botaoGerenciador.draw()
    }
}


