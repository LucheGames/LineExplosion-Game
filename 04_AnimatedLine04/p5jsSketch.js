//Started exploring how to add a gradient to a line in p5js:
//https://forum.processing.org/two/discussion/5620/how-to-draw-a-gradient-colored-line

var randomHue, lineStartX, lineStartY, colourA, colourB;
var lineArray = [];
var sparkArray = [];
var maxLines = 30;
var maxSparks = 30;
var isDragged = false;
var tremor = 0;

function setup() {
//    titleText = createElement( 'h3', "Backwards Ripple");
//    infoText = createElement( 'p', "Drag to build snake | Press for circle explosion");
    createCanvas (windowWidth, windowHeight);
    ellipseMode (RADIUS);
    frameRate (30);
    colorMode (HSB,360,100,100);
//    noStroke();
    randomHue = random (1, 360);
//    strokeWeight(400);
//    stroke(51);
//    fullscreen();
}

function draw() {
    background(100);
    background(randomHue, 100, 100, 0.25); // color BG
    randomHue = (randomHue + 0.5)% 360;
      
    lineArray.forEach(function(line, index, arr) {
        line.show();       
        if (isDragged){
          // line.move();
          line.tremor();
          line.pulse();
        } 
    });

    sparkArray.forEach(function(line, index, arr) {
        spark.show();
        // line.move();
        // line.pulse();
    });

        if (!isDragged) {
          tremor -= random(0.1, 0.5);
        }
       
    ArrayBoundsCheck (lineArray, maxLines);
    ArrayBoundsCheck (sparkArray, maxSparks);
} // end of draw

function mousePressed() {
  isDragged = true;
    lineStartX = mouseX;
    lineStartY = mouseY;
    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
            lineExplosion(lineArray, lineStartX, lineStartY);
            
//            drawGradientLine(lineStartX, lineStartY, mouseX, mouseY, colourA, colourB);
        }
//        if (mouseButton === RIGHT) {
//        }
//        if (mouseButton === CENTER) {
//        }
      }
}

function lineExplosion(targetArray, lineStartX, lineStartY){
    var lineHue = random (1, 360);
    var lineHueVariarion = 40;
    for (i = 0; i < maxLines; i ++) {
//        var x = random (width);
//        var y = random (height);
        var hue = random (0, 360);

        var width = (random (100, 300)); //lineStrokeWeight
        // var lineHue = (lineHue + random(-lineHueVariarion /2 , lineHueVariarion )) % 360;
        // var saturation = random (10, 50);
        // var bright = random (80, 100);
        // var jitter = random (0.5, 1.5);
        // var alpha = random (0.1, 0.7);
        // var pulseDirection = false;
        var line = new DrawLine(lineStartX, lineStartY, mouseX, mouseY, width, hue);
        // push();
        lineArray.push(line);
        // pop();
    }
}

function mouseDragged () {
    tremor += random(0.01, 0.02);
    // var sparkLineLength = random ( 50, 800);
    var randomDirectionX = lineStartX + random(-sparkLineLength, sparkLineLength);
    var randomDirectionY = lineStartY + random(-sparkLineLength, sparkLineLength);
    //   line(lineStartX, lineStartY, randomDirectionX, randomDirectionY);

  // prevent default
 return false;
                               
}

// function randomSpeedLinesAtPoint() {
//     var hue = random (0, 360);
//     var width = (random (100, 300)); 
//     var spark = new DrawLine(lineStartX, lineStartY, mouseX, mouseY, width, hue);
//     sparkArray.push(spark);
// }


function mouseReleased() {
  isDragged = false;
  tremor = 0;
    // line arcs between initial point and release point
    // line explosion at release poinit
}

class DrawLine {
    constructor (x1, y1, x2, y2, width, hue) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        // this.w = width;
        // this.h = hue;

        this.w = (random (width / 10, width)); // lineStrokeWeight 
        this.h = hue; //lineHue
        this.s = random (70, 100);  //saturation
        this.b = random (80, 100);  //bright
        this.j = tremor;  //jitter
        this.a = random (0.1, 0.7); //alpha
        this.p = false;    

    }
//    constructor(x, y, radius, hue, saturation, bright, alpha, jitter, pulseDirection ) {
//        this.x = x;
//        this.y = y;
//        this.r = radius;
//        this.h = hue;
//        this.s = saturation;
//        this.b = bright;
//        this.a = alpha;
//        this.j = jitter;
//        this.p = pulseDirection;
//    }
  
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
   tremor() {
      // push();
      var randoX = random(-this.j, this.j);
      var randoY = random(-this.j, this.j);
      translate(randoX, randoY);

      // translate(tremor,tremor);

      // pop();
      // this.x = this.x + randoX;
      // this.y = this.y + randoY;

      // this.x2 = this.mouseX + randoX;
      // this.y2 = this.mouseX + randoY;
   }

   move() {
      // push();
      var randoX = random(-this.j, this.j);
      var randoY = random(-this.j, this.j);
      translate(randoX, randoY);

      // translate(tremor,tremor);

      // pop();
      // this.x = this.x + randoX;
      // this.y = this.y + randoY;

      // this.x2 = this.mouseX + randoX;
      // this.y2 = this.mouseX + randoY;
   }
//    
//    showGrad() {
//         for (var i =  this.r; i > 0; i -= 2) {
//            fill(this.h, 100, this.b);
//            this.h = (this.h * 0.075)% 360;
//            ellipse(this.x, this.y, i);
//        }
//    }
//    
//    show() {
//        fill(this.h, this.s, this.b, this.a);
//        this.h = (this.h + random(0, 5)) % 360; //colour change
//        ellipse(this.x, this.y, this.r,);
//        }
        show() {
            strokeWeight(this.w);
            stroke(this.h, this.s, this.b, this.a);
//            line(this.x1, this.y1, this.x2, this.y2);
            line(this.x1, this.y1, mouseX, mouseY);
        }
    
} // end of class

function ArrayBoundsCheck (arrayToBeChecked, maxLength) {
    var  arrLength = arrayToBeChecked.length;
    if(arrLength  > maxLength){
        arrayToBeChecked.splice(0, arrLength - maxLength);
    }
}

//function drawLine (x1, y1, x2, y2, width, hue) {
//    strokeWeight(width);
//    stroke = hue;
//    line(x1, y1, x2, y2);
//}

//function drawGradientLine( x1, y1, x2, y2, colorA, colorB) {
//  var deltaX = x2-x1;
//  var deltaY = y2-y1;
//  var tStep = 1.0/dist(x1, y1, x2, y2);
//  for (var t = 0.0; t < 1.0; t += tStep) {
//    fill(lerpColor(colorA, colorB, t));
//    ellipse(x1+t*deltaX,  y1+t*deltaY, 3, 3);
//  }
//}
