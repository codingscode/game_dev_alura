class Inimigo extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
          
        this.velocidade = 8
    }

    move() {
        this.x -= this.velocidade
    }
}