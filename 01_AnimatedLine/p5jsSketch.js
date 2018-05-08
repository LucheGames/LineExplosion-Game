//Started exploring how to add a gradient to a line in p5js:
//https://forum.processing.org/two/discussion/5620/how-to-draw-a-gradient-colored-line

var randomHue, lineStartX, lineStartY, colourA, colourB;

function setup() {
//    titleText = createElement( 'h3', "Backwards Ripple");
//    infoText = createElement( 'p', "Drag to build snake | Press for circle explosion");
    createCanvas(windowWidth, windowHeight);
    ellipseMode(RADIUS);
    frameRate(30);
//    colorMode(HSB, 360, 100, 100);
//    noStroke();
    randomHue = random(1, 360);
    strokeWeight(400);
    stroke(51);
    colourA = color(255, 0, 0);
    colourB = color(0, 255, 0);
//    fullscreen();
}

function draw() {
    background(100);
    background(randomHue, 100, 100, 0.25); // color BG
    randomHue = (randomHue+ 0.5)% 360;
    
    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
          drawGradientLine(lineStartX, lineStartY, mouseX, mouseY, colourA, colourB);
        }
//        if (mouseButton === RIGHT) {
//          rect(25, 25, 50, 50);
//        }
//        if (mouseButton === CENTER) {
//          triangle(23, 75, 50, 20, 78, 75);
//        }
      }
//    ArrayBoundsCheck (gradientCirclesFore, snakeLength);
//    ArrayBoundsCheck (gradientCirclesBg, magicNumber);
    
} // end of draw

function drawLine (x1, y1, x2, y2) {
    line(x1, y1, x2, y2);
}

function drawGradientLine( x1, y1, x2, y2, colorA, colorB) {
  var deltaX = x2-x1;
  var deltaY = y2-y1;
  var tStep = 1.0/dist(x1, y1, x2, y2);
  for (var t = 0.0; t < 1.0; t += tStep) {
    fill(lerpColor(colorA, colorB, t));
    ellipse(x1+t*deltaX,  y1+t*deltaY, 3, 3);
  }
}

function mousePressed() {
    lineStartX = mouseX;
    lineStartY = mouseY;
}

function mouseDragged () {
}


function mouseReleased() {
//    circleFadeOut = true;
//    pulseSnake = false;
//    snakeColour = random(colourList);
}

class LineExplosion {
    constructor () {
        
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
//    
//    pulse() {
//        if (this.p && this.b < 110) {
//            this.b += 5;
//        } else {
//            this.p = false;
//            this.b -= 1;
//        }
//        if (this.b < 75){
//            this.p = true;
//        }
//    }
//    
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
//    move() {
//        this.x = this.x + random(-this.j, this.j);
//        this.y = this.y + random(-this.j, this.j);
//    }
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
    
} // end of class

function ArrayBoundsCheck (arrayToBeChecked, maxLength) {
    var  arrLength = arrayToBeChecked.length;
    if(arrLength  > maxLength){
        arrayToBeChecked.splice(0, arrLength - maxLength);
    }
}