class TelaInicial{
  constructor(){
  }

  keypress(){

  }

  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }

  _imagemDeFundo(){
    image(imagemTelaInicial,0 ,0 ,width, height);
  }

  _texto(){
    textFont(fonteTelaInicial);
    textAlign('center')
    textSize(50);
    text('As aventuras de', width / 2, height / 3);
    textSize(150);
    text('Hypsta', width / 2, (height / 3) + 120);
  }

  _botao(){
    botaoGerenciador.y = (height / 3) + 150;
    botaoGerenciador.draw();
  }
}