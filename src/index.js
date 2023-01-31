
exports.createRobot =(x, y, orientation) => {
this.x=x;
this.y=y;
this.orientation=orientation;

function advance() {
    switch(orientation){
      case 'N':
        y+=1;
      break;
      case 'S':
        y-=1;
      break;
      case 'E':
        x+=1;
      break;
      case 'W':
        x-=1;
      break;
    }
    if(x>10| x<0 | y<0 |y > 10)
      return "fuera de los limites establecidos";
    else
      return "ok";
  }

function turnRight() {
    const  nextDirection ="NESW";
    let pos=(nextDirection.indexOf(orientation)+1)%4
    orientation=nextDirection.charAt(pos);
    
  }

function turnLeft() {
    const  nextDirection ="NWSE";
    let pos=(nextDirection.indexOf(orientation)+1)%4
    orientation=nextDirection.charAt(pos);
  }

function instructions(sec) {
      for (let i=0; i< sec.length; i++){
        switch(sec.charAt(i)){
          case 'R':
            turnRight();
          break;
          case'L':
            turnLeft();
          break;
          case 'A':
          
              let res= advance();
          

          break;
        }
      }

  }


function getPosition() {
  return {x,y,orientation}
}
return { advance, turnRight, turnLeft, instructions, getPosition }
}