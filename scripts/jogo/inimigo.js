class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
          
        this.velocidade = velocidade
        this.x = width
    }

    move() {
        this.x -= this.velocidade

        if (this.x < -this.largura) {
            this.x = width
        }
    }
}