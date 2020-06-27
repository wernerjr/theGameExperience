class Jogo {
  constructor(){
     this.indice = 0;
     this.mapa = fita.mapa;
  }

  setup(){
    createCanvas(windowWidth, windowHeight);    
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
  
    personagem = new Personagem(imagemPersonagem, 55, 25, 110, 135, 220, 270, 16, 4 );
    const inimigo = new Inimigo(imagemInimigo, width - 50, 25, 52, 52, 104, 104, 28, 4 , 10);
    const inimigoGrande = new Inimigo(imagemInimigoGrande, width, 0, 200, 200, 400, 400, 28, 5 , 10);
    const inimigoVoador = new Inimigo(imagemInimigoVoador, width, 135, 100, 75, 200, 150, 16, 3 , 10);

    const passaro = new DecoracaoCenario(imagemPassaro, width, 360, 72, 94, 240, 314, 20, 5, 10, 450);
    const passaro1 = new DecoracaoCenario(imagemPassaro, width, 300, 72, 94, 240, 314, 20, 5, 12, 570);
    const passaro2 = new DecoracaoCenario(imagemPassaro, width, 440, 72, 94, 240, 314, 20, 5, 11, 620);
    
    passaros.push(passaro);
    passaros.push(passaro1);
    passaros.push(passaro2);

    inimigos.push(inimigo);  
    inimigos.push(inimigoGrande);  
    inimigos.push(inimigoVoador);  
    somDoJogo.loop();  
  }

  draw(){
    cenario.exibe();
    cenario.move();
    vida.draw();

    passaros.forEach(passaro => {
      passaro.exibe();
      passaro.move();
    })
    
    pontuacao.exibe();
    pontuacao.adicionarPonto();
    
    personagem.exibe();
    personagem.aplicarGravidade();
  
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    inimigo.velocidade = linhaAtual.velocidade;
  
    inimigo.exibe();
    inimigo.move();
    
    if(inimigoVisivel){
      this.indice++;
      inimigo.aparece();
      if(this.indice > this.mapa.length - 1){
        this.indice = 0;
      }
    }
  
    if(personagem.estaColidindo(inimigo) ){
      vida.perdeVida();
      personagem.ficarInvencivel();
      if(vida.vidas === 0){
        image(imagemGameOver, width / 2 - 200, height / 3)
        noLoop();
      }
    }  
  }

  keyPressed(key){
    if(key === 'ArrowUp'){
      personagem.pula();
    }
  }
}