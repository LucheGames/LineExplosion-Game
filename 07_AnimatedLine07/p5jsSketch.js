
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

// ****

// var randomHue, lineStartX, lineStartY, colourA, colourB;
// var lineStartX, lineStartY; 
var lineArray = [];
// var sparkArray = [];
var maxLines = 500;
// var maxSparks = 30;
var isDragged = false;
var dragScalar = 0;
var tremor = 0;

function setup() {
    createCanvas (windowWidth, windowHeight);
    ellipseMode (RADIUS);
    frameRate (30);
    colorMode (HSB,360,100,100);
    randomHue = random (1, 360);
}

function draw() {
    background(100);
    background(randomHue, 100, 100, 0.25); // color BG
    randomHue = (randomHue + 0.5)% 360;
      
    lineArray.forEach(function(line, index, arr) {
        line.show();
        line.move();
        // line.smear();
        line.concertina();
        if (isDragged){
          dragScalar += 0.005;
           // tremor += random(-0.5, 0.5);       
          // line.tremor();
          // line.pulse();
          // line.concertina();
          
          // line.randomSmear();
        } 
    });

    // sparkArray.forEach(function(line, index, arr) {
    //     spark.show();
        // line.move();
        // line.pulse();
    // });

        if (!isDragged) {
          dragScalar -= 0.1;
          // tremor -= random(0.01, 0.05);
        }
       
    // ArrayBoundsCheck (lineArray, maxLines);
    // ArrayBoundsCheck (sparkArray, maxSparks);
} // end of draw

function mousePressed() {
  // isDragged = true;
    var lineStartX = mouseX;
    var lineStartY = mouseY;
    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
            lineExplosion(lineArray, lineStartX, lineStartY);
        }
      }
}

function lineExplosion(targetArray, lineStartX, lineStartY){
    var lineHue = random (1, 360);
    var lineHueVariarion = 40;
    for (i = 0; i < maxLines / 5; i ++) {
        var hue = random (0, 360);
        var width = (random (100, 300)); //lineStrokeWeight
        var line = new DrawLine(lineStartX, lineStartY, mouseX, mouseY, width, hue);
        lineArray.push(line);
    }
}

function mouseDragged () {
  isDragged = true;
    // tremor += random(0.01, 0.02);
    // var sparkLineLength = random ( 50, 800);

    // var randomDirectionX = lineStartX + random(-sparkLineLength, sparkLineLength);
    // var randomDirectionY = lineStartY + random(-sparkLineLength, sparkLineLength);

    //   line(lineStartX, lineStartY, randomDirectionX, randomDirectionY);

  // prevent default
 // return false;
                               
}

// function randomSpeedLinesAtPoint() {
//     var hue = random (0, 360);
//     var width = (random (100, 300)); 
//     var spark = new DrawLine(lineStartX, lineStartY, mouseX, mouseY, width, hue);
//     sparkArray.push(spark);
// }

function mouseReleased() {
  isDragged = false;
  // tremor = 0;
    // line arcs between initial point and release point
    // line explosion at release poinit
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
        this.maxVectorDistance = randomGaussian(3,4);
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

   concertina() {
      if(this.lineVctorPath.x < this.maxVectorDistance){
        p5.Vector.mult( this.lineVctorPath, dragScalar);
      }
        this.x2 = this.lineVctorPath.x;
        this.y2 = this.lineVctorPath.y;    
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
    // rotate(vec.heading());
    pop();
  }

   move() { 

      this.x = this.x - this.moveDirection;
      this.y = this.y - this.moveDirection;

      this.x2 = this.x2 + this.moveDirection;
      this.y2 = this.y2 - this.moveDirection;



      // push();
      // var randoX = random(-this.j, this.j);
      // var randoY = random(-this.j, this.j);
      // translate(randoX, randoY);
      // translate(tremor,tremor);

      // translate(tremor,tremor);

      // pop();
      // this.x = this.x + randoX;
      // this.y = this.y + randoY;

      // this.x2 = this.mouseX + randoX;
      // this.y2 = this.mouseX + randoY;
   }
    show() {
        strokeWeight(this.w);
        stroke(this.h, this.s, this.b, this.a);
        line(this.x1, this.y1, this.x2, this.y2);
        // line(this.x1, this.y1, mouseX, mouseY);
    }

    //    changeBright(br) {
//        this.b = br;
//    }
//    
//    changeSaturation(sat) {
//        this.s = sat;
//    }
//    
//    fadeOutAlpha(alph) {
//        this.a -= alph;
//    }
//    
//    shrink(rad){
//        this.r -= 1;
//    }
//    
//    swole(rad){
//        this.r += 1;
//    }
//    
//     contains(x, y) {
//        let d = dist(x, y, this.x, this.y);
//        if (d < this.r ){
//            return true;
//        }  else {
//            return false;
//        }
//    } 
//    
//    rolloverCheck(circle) {    
//        if (circle.contains(mouseX, mouseY)) {
//                circle.changeBright(100); 
//            } else {
//                circle.changeBright(70);
//            }
//        }
//   
    
} // end of class

function ArrayBoundsCheck (arrayToBeChecked, maxLength) {
    var  arrLength = arrayToBeChecked.length;
    if(arrLength  > maxLength){
        arrayToBeChecked.splice(0, arrLength - maxLength);
    }
}
