function setup() {
    createCanvas (windowWidth, windowHeight);
    frameRate (30);
    colorMode (HSB,360,100,100);
    randomHue = random (1, 360);
    lineWidthRange = createVector(15, 130);
    maxLines = 100;
    isDragged = false;
    sparkArray = [];
    newLineArray = [];
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
    });

    if (isDragged){
      lineGhost();
      sparkArray.forEach(function(spark, index, newLineArray) {
        spark.show();     
        // if (line.alpha <= 0.05) {
        //   newLineArray.splice(index, 1);
        // }
        });
      }      
    // ArrayBoundsCheck (newLineArray, maxLines);
} // end of draw

function mousePressed() {
    lineStartX = mouseX;
    lineStartY = mouseY;

    if (mouseIsPressed) {
      if (mouseButton === LEFT) {    
          // newLineExplosion(newLineArray);
      }
      if (mouseButton === RIGHT) {
      }
    }
}

function mouseDragged () {
    isDragged = true;
    randomSparksAtPoint(sparkArray);
    oldLineStartX = mouseX;
    oldLineStartY = mouseY;                              
}

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

function newLineExplosion(arr){
    for (i = 0; i < maxLines; i ++) {
        var v0 = createVector (lineStartX, lineStartY);
        var v1 = createVector(oldLineStartX, oldLineStartY);
        var hue = random (1, 360);
        var width = (randomGaussian (lineWidthRange.x, lineWidthRange.y));
        var line = new DrawVectorLine(v0, v1, hue, width);
        arr.push(line);
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

function randomSparksAtPoint(arr) {
    // var hue = random (0, 360);
    // var width = (random (100, 300)); 
    var spark = new DrawSpark();
    arr.push(spark);
}

class DrawSpark {
    constructor(){
    }
    show() {
      // push();
      strokeWeight(random(10,20));
      stroke(0, 0, 100, 0.7);
      // line (lineStartX, lineStartY, mouseX, mouseY);
      // pop();
      line (lineStartX, lineStartY, (lineStartX + random(-100, 100)), (lineStartY + random(-100, 100)));
  }
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}

function lineGhost () {
      push();
      strokeWeight(random(165,170));
      stroke(225, 100, 100, 0.3);
      line (lineStartX, lineStartY, mouseX, mouseY)
      pop();
}

// function ArrayBoundsCheck (arrayToBeChecked, maxLength) {
//     var  arrLength = arrayToBeChecked.length;
//     if(arrLength  > maxLength){
//         arrayToBeChecked.splice(0, arrLength - maxLength);
//     }
// }
