//variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da Raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 80;

//variaveis da Raquete do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeRaqueteOponente;

//colisão
let colidiu = false;

//pontos
let meusPontos = 0;
let oponentePontos = 0;

//sons
let ponto;
let raquetada;
let trilha;

//chance de errar
let chanceDeErrar = 0;

function preload(){
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3"); 
  trilha = loadSound ("trilha.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  velocidadeBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  calculaChanceDeErrar();
  movimentoRaqueteOponente();
  inserirPlacar();
  pontuar();
  bolinhaNaoFicaPresa();
  
}
   
function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
  }
  
function velocidadeBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }
 
function verificaColisaoBorda(){
     if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
  }

function mostraRaquete(x, y){
    rect(x, y, comprimentoRaquete, alturaRaquete);
  }

function movimentaMinhaRaquete (){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 5;
  }
   if (keyIsDown(DOWN_ARROW)){
    yRaquete += 5;
  }
  }
  
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
  raquetada.play();
}

function calculaChanceDeErrar() {
  if (oponentePontos >= meusPontos) {
    chanceDeErrar += 1;
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40;
    }
  } else {
    chanceDeErrar -= 1;
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35;
    }
  }
}

function movimentoRaqueteOponente(){
    //if (keyIsDown(87)){
    //yRaqueteOponente -= 5;
  //}
   //if (keyIsDown(83)){
   //yRaqueteOponente += 5;
  //}
  
  velocidadeRaqueteOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
  yRaqueteOponente += velocidadeRaqueteOponente + chanceDeErrar;
}

function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function inserirPlacar(){
  stroke (255);
  fill (color(255, 140, 0));
  rect (225, 15, 40, 30);
  fill (255);
  textSize (25);
  text (meusPontos, 230, 37);
  fill (color(255, 140, 0));
  rect (350, 15, 40, 30);
  fill (255);
  text (oponentePontos, 353, 37);
}
function pontuar(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    oponentePontos += 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa(){
  if (xBolinha - raio < 0){
    xBolinha = 23
  }
};
