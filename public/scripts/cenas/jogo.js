class Jogo {
  constructor(){
    this.inimigoAtual = 0;
  }

  setup(){
    createCanvas(windowWidth, windowHeight);    
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
  
    personagem = new Personagem(imagemPersonagem, 55, 25, 110, 135, 220, 270, 16, 4 );
    const inimigo = new Inimigo(imagemInimigo, width - 50, 25, 52, 52, 104, 104, 28, 4 , 14, 30);
    const inimigoGrande = new Inimigo(imagemInimigoGrande, width, 0, 200, 200, 400, 400, 28, 5 , 12, 80);
    const inimigoVoador = new Inimigo(imagemInimigoVoador, width, 135, 100, 75, 200, 150, 16, 3 , 12, 450);
  
    inimigos.push(inimigo);  
    inimigos.push(inimigoGrande);  
    inimigos.push(inimigoVoador);  
    somDoJogo.loop();  
  }

  draw(){
    cenario.exibe();
    cenario.move();
    
    pontuacao.exibe();
    pontuacao.adicionarPonto();
    
    personagem.exibe();
    personagem.aplicarGravidade();
  
    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
  
    inimigo.exibe();
    inimigo.move();
  
    if(inimigoVisivel){
      this.inimigoAtual++;
      if(this.inimigoAtual > inimigos.length-1){
        this.inimigoAtual = 0;
      }
      inimigo.velocidade = parseInt(random(10, 30));
    }
  
    if(personagem.estaColidindo(inimigo) ){
      image(imagemGameOver, width / 2 - 200, height / 3)
      noLoop();
    }  
  }

  keyPressed(key){
    if(key === 'ArrowUp'){
      personagem.pula();
      somDoPulo.play();
    }
  }
}