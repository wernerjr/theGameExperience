class Inimigo extends Animacao{
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, quantidadeSprites, quantidadeColunaSprites, velocidade){
    super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, quantidadeSprites, quantidadeColunaSprites);
    this.velocidade = velocidade;
    this.x = width;
  }

  move(){
    this.x = this.x - this.velocidade;
  }

  aparece(){
    this.x = width;
  }
}