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
        textAlign(CENTER)
        text('As aventuras de', width/2, 140)
        textSize(85)
        text('Hipsta', width/2, 215)
    }
}
