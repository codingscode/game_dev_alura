class Personagem extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
       super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) 
       
       this.yInicial = height - this.altura
       this.y =this.yInicial

       this.velocidadeDoPulo = 0
       this.gravidade = 3
    }

    pula() {
        console.log('pulei')
        console.log(this.velocidadeDoPulo)
        this.velocidadeDoPulo = -50
    }

    aplicaGravidade() {
        this.y += this.velocidadeDoPulo
        this.velocidadeDoPulo += this.gravidade

        if (this.y > this.yInicial) {
            this.y = this.yInicial
        }
    }

    estaColidindo(inimigo) {
        noFill()
        rect(this.x, this.y, this.largura, this.altura)
        rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura)
        const colisao = collideRectRect(this.x, this.y, this.largura, this.altura, inimigo.x, inimigo.y, inimigo.largura, inimigo.altura)
    
        return false
    }

}
