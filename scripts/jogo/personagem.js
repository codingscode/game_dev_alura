class Personagem extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
       super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) 
       
       this.frameAtual= 0
    }

    pula() {
        this.y -= 50
    }
}
