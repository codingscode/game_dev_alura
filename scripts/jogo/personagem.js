class Personagem {
    constructor(imagem) {
       this.imagem = imagem
    }
    
    exibe() {
        image(this.imagem, 0, height - 135, 110, 135, 0, 0, 220, 270)  
    }
}
