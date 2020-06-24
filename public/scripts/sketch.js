let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let somDoPulo;
let personagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let pontuacao;

const inimigos = [];

function preload() {
  imagemCenario = loadImage('./assets/imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png');
  imagemInimigo = loadImage('./assets/imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('./assets/imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('./assets/imagens/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('./assets/imagens/assets/game-over.png');
  somDoJogo = loadSound('./assets/sons/trilha_jogo.mp3');
  somDoPulo = loadSound('./assets/sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);    
  cenario = new Cenario(imagemCenario, 3);
  pontuacao = new Pontuacao();

  personagem = new Personagem(imagemPersonagem, 55, 25, 110, 135, 220, 270, 16, 4 );
  const inimigo = new Inimigo(imagemInimigo, width - 50, 25, 52, 52, 104, 104, 28, 4 , 14, 30);
  const inimigoGrande = new Inimigo(imagemInimigoGrande, width, 0, 200, 200, 400, 400, 28, 5 , 12, 130);
  const inimigoVoador = new Inimigo(imagemInimigoVoador, width, 290, 100, 75, 200, 150, 16, 3 , 12, 660);

  inimigos.push(inimigo);  
  inimigos.push(inimigoGrande);  
  inimigos.push(inimigoVoador);  

  frameRate(30);
  somDoJogo.loop();  
}

function keyPressed(){
  if(key === 'ArrowUp'){
    personagem.pula();
    somDoPulo.play();
  }
}

function draw() { 
  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicarGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();
    if(personagem.estaColidindo(inimigo) ){
      image(imagemGameOver, width / 2 - 200, height / 3)
      noLoop();
    }
  })

}