class TelaInicial {
    constructor() {

    }

    draw() {
       this._imagemDeFundo()
       this._texto()
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height)
    }

    _texto() {
        textSize(46)
        textFont(fonteTelaInicial)
        text('As aventuras de', width/3 + 50, 90)
        text('Hipsta', width/3 + 120, 130)
    }
}
