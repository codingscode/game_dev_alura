class Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
       this.matriz = matriz
       this.imagem = imagem
       this.x = x
       this.largura = largura
       this.altura = altura
       this.larguraSprite = larguraSprite
       this.alturaSprite = alturaSprite
    }

    exibe() {
        image(this.imagem, 0, height - 135, 110, 135, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 
               220, 270)  
        this.anima()
    }
}