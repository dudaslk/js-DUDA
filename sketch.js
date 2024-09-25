let cor;
let posicaohorizontal;//x
let posicaovertical;//y
function setup() {
  createCanvas(1000, 800);
background(color(100,0,100));
    cor= color(random(0,255),random(0,255),random(0,255));
  posicaohorizontal=200
  posicaovertical=200
}

function draw() {
  fill(cor);
  circle(posicaohorizontal,posicaovertical,50);
  if(mouseX<posicaohorizontal){
  posicaohorizontal=posicaohorizontal-1;
    
 }
 if(mouseY>posicaohorizontal){
 posicaohorizontal=posicaohorizontal+1;
  
 }
 if(mouseY<posicaovertical){
 posicaovertical--;
  
 }
 if(mouseY>posicaovertical){
 posicaovertical++;
 }
   cor= color(random(0,255),random(0,255),random(0,255),random(0,100));
              
  
}

  
  
  
}
