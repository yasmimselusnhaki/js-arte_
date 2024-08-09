let cor;
let posicaoHorizontal; //x
let posicaoVertical; //y

function setup() {
  
  createCanvas(400, 400);
    background(0,255,255);
    cor = color(random(0,174), random(0,74), random(0,115));
    posicaoHorizontal = 200;
    posicaoVertical = 200;
}

function draw() {
  circle(posicaoHorizontal,posicaoVertical,100);
  fill(cor);
  
   if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal -1;
  }
  
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal +1;
  }
  
  if(mouseY < posicaoVertical) {
    posicaoVertical = posicaoVertical -1;
  }
  
  if(mouseY > posicaoVertical) {
    posicaoVertical = posicaoVertical +1;
  }

  if(mouseIsPressed) {
    cor = color(random(0,174), random(0,74), random(0,115),random(0,100));
    
  }

}