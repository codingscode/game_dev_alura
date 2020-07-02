class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
          
        this.velocidade = 8
    }

    move() {
        this.x -= this.velocidade

        if (this.x < -this.largura) {
            this.x = width
        }
    }
}