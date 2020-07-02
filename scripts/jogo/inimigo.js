class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, atraso) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
          
        this.velocidade = velocidade
        this.atraso = atraso
        this.x = width + this.atraso
    }

    move() {
        this.x -= this.velocidade

        if (this.x < -this.largura - this.atraso) {
            this.x = width
        }
    }
}