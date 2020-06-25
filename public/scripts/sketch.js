function setup() {
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    telaInicial,
    jogo,
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width /2 , height /2);
  frameRate(30);
}

function keyPressed(){
  jogo.keyPressed(key);
}

function draw() {   
  cenas[cenaAtual].draw();
}