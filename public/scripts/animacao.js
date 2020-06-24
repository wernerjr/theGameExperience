class Animacao {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, quantidadeSprites, quantidadeColunaSprites){
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.variacaoY = variacaoY;
    this.x = x;
    this.y = height - this.altura - this.variacaoY;
    this.quantidadeSprites = quantidadeSprites;
    this.quantidadeColunaSprites = quantidadeColunaSprites;
    this.frameAtual = 0;
  }

  exibe(){
    let x = this.frameAtual % this.quantidadeColunaSprites * this.larguraSprite;
    let y = Math.floor(this.frameAtual / this.quantidadeColunaSprites) * this.alturaSprite;

    image(this.imagem, this.x , this.y, this.largura, this.altura, 
      x, y, 
      this.larguraSprite, this.alturaSprite); 

   this.anima();
 }

 anima(){
  this.frameAtual++;
  if(this.frameAtual >= this.quantidadeSprites - 1){
    this.frameAtual = 0;
  }
}

}