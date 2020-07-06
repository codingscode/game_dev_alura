class BotaoGerenciador {
    constructor(texto, x, y) {
       this.texto = texto
       this.x = x
       this.y = y
       this.botao = createButton(this.texto)
    }
 
    draw() {
       this.botao.position(this.x, this.y)
       this.botao.mousePressed(() => cenaAtual = 'jogo')
    }

}



