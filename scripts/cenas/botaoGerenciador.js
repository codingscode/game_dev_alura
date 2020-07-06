class BotaoGerenciador {
    constructor(texto, x, y) {
       this.texto = texto
       this.x = x
       this.y = y
       this.botao = createButton(this.texto)
       this.botao.mousePressed(() => this._alteraCena())
    }
 
    draw() {
       this.botao.position(this.x, this.y)
       
    }

   _alteraCena() {
      this.botao.remove()
      cenaAtual = 'jogo'
   }

}



