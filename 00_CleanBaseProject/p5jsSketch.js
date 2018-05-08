var randomHue;

function setup() {
//    titleText = createElement( 'h3', "Backwards Ripple");
//    infoText = createElement( 'p', "Drag to build snake | Press for circle explosion");
    createCanvas(windowWidth, windowHeight);
    ellipseMode(RADIUS);
    frameRate(30);
    colorMode(HSB, 360, 100, 100);
//    noStroke();
    randomHue = random(1, 360);
//    fullscreen();
}

function draw() {
    background(100);
    background(randomHue, 100, 100, 0.25); // color BG
    randomHue = (randomHue+ 0.5)% 360;
    
//    ArrayBoundsCheck (gradientCirclesFore, snakeLength);
//    ArrayBoundsCheck (gradientCirclesBg, magicNumber);
    
} // end of draw

function mousePressed() {

}

function mouseDragged () {
}

function buildExplosion(targetArray) {
//    var x = mouseX + random(-magicNumber/5, magicNumber/5);
//    var y = mouseY + random(-magicNumber/5, magicNumber/5);
//    var radius = random (3, 15) * random (2, 14);
//    var hue = random (300, 360); //defined range to give hues more simalarity
//    var hue = (random(colourList) + random( -magicNumber, magicNumber)) % 360; // double rainbow!
//    var hue = (snakeColour + random( -40, 10)) % 360
    
//    var bright= random (90, 100);
//    var saturation = random (50, 80);
//    var alpha = random (0.5, 0.9);
//    var jitter = random (2, 4);
//    var pulseDirection = false;
    
//    var c = new LineExplosion(x , y, radius, hue, saturation, bright, alpha, jitter, pulseDirection);
//    targetArray.push(c);
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