
//Have multiple objects

// var randomHue, lineStartX, lineStartY, colourA, colourB;
var lineArray = [];
// var sparkArray = [];
var maxLines = 30;
// var maxSparks = 30;
var isDragged = false;
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
        if (isDragged){
           tremor += random(-0.5, 0.5);       
          // line.tremor();
          // line.pulse();
        } 
    });

    // sparkArray.forEach(function(line, index, arr) {
    //     spark.show();
        // line.move();
        // line.pulse();
    // });

        if (!isDragged) {
          // tremor -= random(0.01, 0.05);
        }
       
    //ArrayBoundsCheck (lineArray, maxLines);
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
    for (i = 0; i < maxLines; i ++) {
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
        this.vector = random(-1,1);
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

   move() {
      this.x = this.x + this.vector;
      this.y = this.y - this.vector;

      this.x2 = this.x2 + this.vector;
      this.y2 = this.y2 - this.vector;



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
