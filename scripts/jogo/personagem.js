class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
       super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) 
       
       this.variacaoY = variacaoY
       this.yInicial = height - this.altura - this.variacaoY
       this.y =this.yInicial

       this.velocidadeDoPulo = 0
       this.gravidade = 3
       this.alturaDoPulo = - 50
       this.pulos = 0
    }

    pula() {
        if (this.pulos < 3) {
            this.velocidadeDoPulo = this.alturaDoPulo
        }
        console.log('pulei')
        console.log(this.velocidadeDoPulo)
        
    }

    aplicaGravidade() {
        this.y += this.velocidadeDoPulo
        this.velocidadeDoPulo += this.gravidade

        if (this.y > this.yInicial) {
            this.y = this.yInicial
        }
    }

    estaColidindo(inimigo) {
        /* noFill()
        rect(this.x, this.y, this.largura, this.altura)
        rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura) */
        const precisao = .73
        const colisao = collideRectRect(this.x, this.y, this.largura*precisao, this.altura*precisao, inimigo.x, inimigo.y, inimigo.largura*precisao, inimigo.altura*precisao)
    
        return colisao
    }

}
