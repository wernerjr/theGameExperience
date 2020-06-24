class Pontuacao{
  constructor(){
    this.pontos = 0;
  }

  exibe(){
    textAlign(RIGHT);
    fill('#f6f6f6')
    textSize(50);
    text(parseInt(this.pontos, 10), width - 30, 50);
  }

  adicionarPonto(){
    this.pontos += 0.2;
  }
}