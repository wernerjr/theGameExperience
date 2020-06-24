class Personagem extends Animacao {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, quantidadeSprites, quantidadeColunaSprites){
    super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, quantidadeSprites, quantidadeColunaSprites);

    this.velocidade = 10;
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadePulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;
  }

  pula(){
    this.pulos++;
    if(this.pulos < 3){
      this.velocidadePulo = this.alturaDoPulo; 
    }
  }

  aplicarGravidade(){
    this.y = this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;

    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  estaColidindo(inimigo){
    const precisao = .7;
    //noFill();
    //rect(this.x, this.y, this.largura * precisao, this.altura);
    //rect(inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura);
    const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao,
                    inimigo.x, inimigo.y, inimigo.largura* precisao, inimigo.altura * precisao );
    return colisao;
  }

}