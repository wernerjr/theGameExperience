class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);

    this.velocidade = 10;

    this.yInicial = height - this.altura;
    this.y = this.yInicial;
    this.velocidadePulo = 0;
    this.gravidade = 3;
  }

  pula(){
    this.velocidadePulo = - 35; 
  }

  aplicarGravidade(){
    this.y = this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;

    if(this.y > this.yInicial){
      this.y = this.yInicial;
    }
  }

  estaColidindo(inimigo){
    const precisao = .6;
    // noFill();
    // rect(this.x, this.y, this.largura * precisao, this.altura);
    // rect(inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura);
    const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura,
                    inimigo.x, inimigo.y, inimigo.largura* precisao, inimigo.altura );
    return colisao;
  }

}