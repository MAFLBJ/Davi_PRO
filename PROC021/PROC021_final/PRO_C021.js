var retMov, retFixo, obj1, obj2;
var distPontos, distYmax, distXmax;
var distX, distY, distPontos;
function setup() {
  createCanvas(windowWidth, windowHeight);
  retMov = createSprite(670, 400, 100, 50);
  //retMov.debug = true;
  retFixo = createSprite(320, 250, 150, 80);
  //retFixo.debug = true;
  obj1 = createSprite(670, 400, 100, 50);
  obj2 = createSprite(670, 150, 150, 80);



  distXMin = retMov.width / 2 + retFixo.width / 2;
  distYMin = retMov.height / 2 + retFixo.height / 2;
}

function draw() {
  background("black");

  drawSprites();
  stroke("yellow");
  fill("yellow");
  textSize(25);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  retMov.x = mouseX;
  retMov.y = mouseY;
  //Controle(retMov);
  //distX = Math.abs(retMov.x - retFixo.x);
  //distY = Math.abs(retMov.y - retFixo.y);
  //distPontos =  Math.sqrt( distX*distX + distY*distY); 

  //text("dist entre os pontos: "+distPontos,650, 80);
  //text("distanciaX: "+distX, 730, 105);
  //text("distanciaY: "+distY, 730, 130);


  colisao();

  //criaLinha();
}

function criaLinha() {
  stroke("yellow");
  fill("yellow");
  textSize(25);
  line(retMov.x, retMov.y, retFixo.x, retFixo.y);

}

function colisao() {
  if (isTouching(retMov, retFixo)) {
    retMov.shapeColor = "red";
    retFixo.shapeColor = "red";
  } else if (isTouching(retMov, obj1)) {
    retMov.shapeColor = "red";
    obj1.shapeColor = "red";
  } else if (isTouching(retMov, obj2)) {
    retMov.shapeColor = "red";
    obj2.shapeColor = "red";
  } else {
    retMov.shapeColor = "green";
    retFixo.shapeColor = "green";
    obj1.shapeColor = "green";
    obj2.shapeColor = "green";
  }
}

function isTouching(objeto1, objeto2) {

  let distX = Math.abs(objeto1.x - objeto2.x);
  let distY = Math.abs(objeto1.y - objeto2.y);
  let distXMin = objeto1.width / 2 + objeto2.width / 2;
  let distYMin = objeto1.height / 2 + objeto2.height / 2;
  if ((distY <= distYMin && distX <= distXMin) ||
    (distX <= distXMin && distY <= distYMin)) {
    return true;
    //retMov.shapeColor = "red";
    //retFixo.shapeColor = "red";
  } else {
    return false;
  }
}






