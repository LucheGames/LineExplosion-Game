
// 2DO's
// create multiple line group objects, DONE!
// on drag shapes should concertina outwards corresponding dynamically with drag distance.
// make the smear direction random

// EXAMPLES
// scalar / cos / sin example:
// https://p5js.org/examples/math-sine-cosine.html

// forces simulation:
// https://p5js.org/examples/simulate-forces.html

// vectors to determine line direction:
// https://p5js.org/reference/#/p5.Vector/heading

// learning more about p5js colorMode();
// https://p5js.org/learn/color.html

// ****

var lineStartX, lineStartY, oldLineStartX, oldLineStartY;
var lineArray = [];
var newLineArray = [];
var maxLines = 200;
var isDragged = false;
// var dragScalar = 1000;
// var tremor = 0;

function setup() {
    createCanvas (windowWidth, windowHeight);
    frameRate (30);
    colorMode (HSB,360,100,100);
    randomHue = random (1, 360);
    lastClickedPoint = createVector(windowWidth /2, windowHeight /2);
}

function draw() {
    background(100);
    background(randomHue, 100, 100, 0.25); 
    randomHue = (randomHue + 0.5)% 360;

    newLineArray.forEach(function(line, index, newLineArray) {
        line.show();
        
        if (line.alpha <= 0.05) {
          newLineArray.splice(index, 1);
        }
        if (isDragged){

        } 
    });

      if (isDragged){
          push();
          strokeWeight(300);
          stroke(225, 100, 100, 0.3);
          line (lineStartX, lineStartY, mouseX, mouseY)
          pop();
        } 
       
    ArrayBoundsCheck (lineArray, maxLines);
} // end of draw

function mousePressed() {
    lineStartX = mouseX;
    lineStartY = mouseY;
    lastClickedPoint = createVector (mouseX,mouseY);

    if (mouseIsPressed) {
      if (mouseButton === LEFT) {    
          // newLineExplosion(newLineArray);
      }
      if (mouseButton === RIGHT) {
      }
    }
}

function newLineExplosion(arr){
    for (i = 0; i < maxLines; i ++) {
        var v0 = createVector (lineStartX, lineStartY);
        var v1 = createVector(oldLineStartX, oldLineStartY);
        var hue = random (1, 360);
        var width = (randomGaussian (50, 100));
        var line = new DrawVectorLine(v0, v1, hue, width);
        arr.push(line);
    }

class DrawVectorAdditive {
    constructor (magnitude, direction) {
        this.startX = lastClickedPoint.x;
        this.startY = lastClickedPoint.y;
        this.hue = random(1, 360);
        this.alpha = random(0.1, 0.9);
        this.weight = random(50, 110);
        // this.lifeCount = 0;
    }
   expander() {
      // if(this.lineVctorPath.x < this.maxVectorDistance){   
      // }
      // p5.Vector.mult( this.lineVctorPath, dragScalar);
        this.x2 = this.lineVctorPath.x;
        this.y2 = this.lineVctorPath.y;    
   }
   findEndPoint()

    show() {
      strokeWeight(this.weight);
      stroke(this.hue, 100, 100, this.alpha);
      line(this.startX, this.startY, this.endX, this.endY);
      // this.lifeCount ++;
    }
}

class DrawVectorLine {
    constructor (startPointVec, endPointVec, hue, width) {
      this.startX = startPointVec.x;
      this.startY = startPointVec.y;
      this.endX = endPointVec.x;
      this.endY = endPointVec.y;
      this.hue = hue;
      this.alpha = random(0.1, 0.9);
      this.weight = width;
      this.lifeCount = 0;
    }
    dimMak(dimmer) {
      this.alpha -= dimmer;
    }
    show() {
      strokeWeight(this.weight);
      stroke(this.hue, 100, 100, this.alpha);
      line(this.startX, this.startY, this.endX, this.endY);
      this.lifeCount ++;
    }
} // end DrawVectorLine class

function lineExplosion(targetArray, lineStartX, lineStartY){

    for (i = 0; i < maxLines / 5; i ++) {
        var hue = random (0, 360);
        var width = (random (100, 300)); //lineStrokeWeight
        var line = new DrawLine(lineStartX, lineStartY, mouseX, mouseY, width, hue);
        lineArray.push(line);
    }
}

function mouseDragged () {
  isDragged = true;
  oldLineStartX = mouseX;
  oldLineStartY = mouseY;
                               
}

// function randomSpeedLinesAtPoint() {
//     var hue = random (0, 360);
//     var width = (random (100, 300)); 
//     var spark = new DrawLine(lineStartX, lineStartY, mouseX, mouseY, width, hue);
//     sparkArray.push(spark);
// }

function mouseReleased() {
  isDragged = false;
  newLineExplosion(newLineArray);

  newLineArray.forEach(function(line, index, newLineArray) {
      if (line.lifeCount > 30) {
        line.dimMak(0.15);
      }      
      if (isDragged){
      } 
    });

}

class DrawLine {
    constructor (x1, y1, x2, y2, width, hue) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.w = (random (width / 10, width)); 
        this.h = hue;
        this.s = random (70, 100);  //saturation
        this.b = random (80, 100);  //bright
        this.j = random(-tremor, tremor);  //jitter
        this.a = random (0.1, 0.7); //alpha
        this.p = false;
        this.moveDirection = random(-1,1);
        // this.moveDirection0 = random(-1,1);
        // this.moveDirection2 = random(-1,1);
        // this.origin = createVector(lineStartX, lineStartY);
        this.v1 = createVector(40, 50);
        this.lineVctorPath = createVector(random(0,windowWidth), random(0,windowHeight));
        this.maxVectorDistance = 0.5;
    }
  
   pulse() {
       if (this.p && this.b < 110) {
           this.b += 5;
       } else {
           this.p = false;
           this.b -= 1;
       }
       if (this.b < 75){
           this.p = true;
       }
   }

   tremor() {
      // var randoX = random(-this.j, this.j);
      // var randoY = random(-this.j, this.j);
      // translate(randoX, randoY);
      translate(-tremor,tremor);
   }

   exploder() {
      // if(this.lineVctorPath.x < this.maxVectorDistance){   
      // }
      // p5.Vector.mult( this.lineVctorPath, dragScalar);
        this.x2 = this.lineVctorPath.x;
        this.y2 = this.lineVctorPath.y;    
   }

   concertina() {
    // similar to exploder but all the lines are parallel to the users drag and pull in and out on an invisable vector
      // if(this.lineVctorPath.x < this.maxVectorDistance){
      //   p5.Vector.mult( this.lineVctorPath, dragScalar);
      // }
      //   this.x2 = this.lineVctorPath.x;
      //   this.y2 = this.lineVctorPath.y;    
   }

  smear() { //45 degrees
    //make the smear direction random
      // this.x = this.x + random(-this.moveDirection, this.moveDirection);
      // this.y = this.y + random(-this.moveDirection, this.moveDirection);

      this.x2 = this.x2 + random(-this.moveDirection, this.moveDirection);
      this.y2 = this.y2 + random(-this.moveDirection, this.moveDirection);
  }

  randomSmear() {
    push();
    translate(origin.x, origin.y);
    line(0, 0, vec.x, vec.y);
    pop();
  }

   move() { 

      this.x2 = this.x2 + this.moveDirection;
      this.y2 = this.y2 + this.moveDirection;
   }
    show() {
        strokeWeight(this.w);
        stroke(this.h, this.s, this.b, this.a);
        line(this.x1, this.y1, this.x2, this.y2);
    }    
} // end of class

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function ArrayBoundsCheck (arrayToBeChecked, maxLength) {
    var  arrLength = arrayToBeChecked.length;
    if(arrLength  > maxLength){
        arrayToBeChecked.splice(0, arrLength - maxLength);
    }
}

