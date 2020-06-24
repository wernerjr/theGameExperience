class Inimigo extends Animacao{
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, quantidadeSprites, quantidadeColunaSprites, velocidade, delay){
    super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, quantidadeSprites, quantidadeColunaSprites);
    this.delay = delay;
    this.velocidade = velocidade;
    this.x = width + this.delay;
  }

  move(){
    this.x = this.x - this.velocidade;

    if(this.x < -this.largura - this.delay){
      this.x = width;
    }
  }
}