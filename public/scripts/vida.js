class Vida{
  constructor(maxVidas, inicial){
    this.maxVidas = maxVidas;
    this.inicial = inicial;
    this.vidas = inicial;

    this.largura = 30;
    this.altura = 25;

    this.xInicial = 20;
    this.y = 20;

  }

  draw(){
    for(let i = 0; i < this.vidas; i++){
      const margem = i * 35;
      const posicao = this.xInicial * 1 + i;
      image(imagemVida, posicao + margem, this.y, this.largura, this.altura);
    }
  }

  ganhaVida(){
    if(this.vidas < this,this.maxVidas){
      this.vidas++;
    }
  }

  perdeVida(){
    this.vidas--;    
  }
}