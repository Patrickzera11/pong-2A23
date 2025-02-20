
//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;


let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

let meusPontos = 0;
let pontosDoOponente = 0;



function setup() {
  createCanvas(600, 400)
  
}

function draw() {
  background(0,0,150, 150);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentoMinhaRaquete();
  
  verificaColisaoRaquete(xRaquete,yRaquete);
  
  
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  
  incluirPlacar();
  marcaPonto();
}
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
  
}

function mostraRaquete(x,y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentoMinhaRaquete() {
  if(keyIsDown(UP_ARROW)){
    yRaquete += -10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if(xBolinha - raio < xRaquete + raqueteComprimento &&
     yBolinha - raio < yRaquete + raqueteAltura &&
     yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}
function verificaColisaoRaquete(x,y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
}
function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function incluirPlacar() {
  fill(255);
  text(meusPontos, 278,26);
  text(pontosDoOponente, 321,26);
}

function marcaPonto() {
  if(xBolinha > 590) {
    meusPontos++;
  }
  if(xBolinha < 10) {
    pontosDoOponente++;
}
}