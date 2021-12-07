var retMov, retFixo;
var distPontos, distYmax, distXmax;
var distX, distY, distPontos;
function setup() {
  createCanvas(windowWidth , windowHeight);
  retMov = createSprite(670, 400, 100, 50);
  retMov.debug = true;
  retFixo = createSprite(320, 250, 150, 80);
  retFixo.debug = true;

  distXMin = retMov.width/2 + retFixo.width/2;
  distYMin = retMov.height/2 + retFixo.height/2; 
}

function draw() {
  background("black");  
  stroke("yellow");
  fill("yellow");
  textSize(25);  
  //text(mouseX+","+mouseY, mouseX, mouseY);
  retMov.x = mouseX;
  retMov.y = mouseY;
  //Controle(retMov);
  distX = Math.abs(retMov.x - retFixo.x);
  distY = Math.abs(retMov.y - retFixo.y);
  distPontos =  Math.sqrt( distX*distX + distY*distY); 
   
  text("dist entre os pontos: "+distPontos,650, 80);
  text("distanciaX: "+distX, 730, 105);
  text("distanciaY: "+distY, 730, 130);
  retMov.shapeColor = "green";
  retFixo.shapeColor = "green";

  colisao();
  drawSprites();
  criaLinha();
}

function criaLinha(){
  stroke("yellow");
  fill("yellow");
  textSize(25);
  line(retMov.x, retMov.y, retFixo.x, retFixo.y);
  
}

function colisao(){
  if ((distY <= distYMin && distX <= distXMin)) {
    retMov.shapeColor = "red";
    retFixo.shapeColor = "red";
  }
}






 