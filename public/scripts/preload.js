function preload() {
  imagemCenario = loadImage('./assets/imagens/cenario/floresta.png');
  imagemTelaInicial = loadImage('./assets/imagens/assets/telainicial.png');
  imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png');
  imagemInimigo = loadImage('./assets/imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('./assets/imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('./assets/imagens/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('./assets/imagens/assets/game-over.png');
  somDoJogo = loadSound('./assets/sons/trilha_jogo.mp3');
  somDoPulo = loadSound('./assets/sons/somPulo.mp3');
  fonteTelaInicial = loadFont('./assets/imagens/assets/fonteTelaInicial.otf');
}