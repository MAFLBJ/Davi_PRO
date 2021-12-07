function controle(retMov, delX, delY){
  if (delX === undefined){
    delX = 1;    
  }
  if (delY === undefined){
    delY = 1;
  }
    if(keyDown("w")){
      retMov.y = retMov.y - delY;
    }
  
    if(keyDown("s")){
      retMov.y = retMov.y + delY;
    }
  
    if(keyDown("d")){
      retMov.x = retMov.x + delX;
    }
  
    if(keyDown("a")){
      retMov.x = retMov.x - delX;
    }
  
  }