
var slideIndex = 0;

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var doge = null;
var currentTween = null;

var image = new Image();
image.onload = function() {
  doge = this;
}
image.src = "assets/images/doge.png"

 
function init() {
  // Setup kibo
  var k = new Kibo();
  k.down(['space', 'right', 'enter'], advanceSlide);
  k.down('left', reverseSlide);
  clearCanvas();
  slideFunctions[0]();
}

function clearCanvas() {
  canvas.width = canvas.width;
}

// Setup list of functions
var slideFunctions = [
  function() {
    ctx.font = "36pt Roboto";
    ctx.fillText("Canvas 2D Presentation", 100, 100);
  },
  function() {
    ctx.font = "36pt Roboto";
    ctx.fillText("Welcome", 100, 100);
    ctx.fillText("Hit enter to start", 100, 200);
  },
  function() { 
    currentTween = new TWEEN.Tween( {pt: 18})
      .to( {pt:36}, 2000)
      .easing( TWEEN.Easing.Back.InOut )
      .onUpdate( function() {
        clearCanvas();
        ctx.font = this.pt + "pt Roboto"
        ctx.fillText("Hi!", 100, 100);
      }).start();
  },
  function() { 
    currentTween = new TWEEN.Tween( {pt: 18})
      .to( {pt:36}, 2000)
      .easing( TWEEN.Easing.Elastic.InOut )
      .onUpdate( function() {
        clearCanvas();
        ctx.font = this.pt + "pt Roboto"
        ctx.fillText("Much doge!", 100, 100);
      });
    var imageTween = new TWEEN.Tween( {scale:0.1})
      .to( {scale: 0.5}, 3000)
      .easing( TWEEN.Easing.Sinusoidal.In)
      .onUpdate( function() {
        clearCanvas();
        ctx.font = "36pt Roboto";
        ctx.drawImage(doge, 0, 0, canvas.width * this.scale, canvas.height * this.scale )
        ctx.fillText("Much doge!", 100, 100);
      });
    currentTween.chain( imageTween );
    currentTween.start();
  },
  function() {
    var currentTween = new TWEEN.Tween( {posX: -100})
      .to ( {posX: 700})
      .easing ( TWEEN.Easing.Quartic.In )
      .onUpdate( function() {
        clearCanvas();
        ctx.font = "20pt Roboto";
        ctx.fillText("* Point 1", this.posX, 100);
      });
    var textTween2 = new TWEEN.Tween( {posX: -100})
      .to ( {posX: 700})
      .easing ( TWEEN.Easing.Quartic.In )
      .onUpdate( function() {
        clearCanvas();
        ctx.font = "20pt Roboto";
        ctx.fillText("* Point 1", 700, 100);
        ctx.fillText("* Point 2", this.posX, 200);
      });
    var textTween3 = new TWEEN.Tween( {posX: -100})
      .to ( {posX: 700})
      .easing ( TWEEN.Easing.Quartic.In )
      .onUpdate( function() {
        clearCanvas();
        ctx.font = "20pt Roboto";
        ctx.fillText("* Point 1", 700, 100);
        ctx.fillText("* Point 2", 700, 200);
        ctx.fillText("* Point 3", this.posX, 300);
      });
    currentTween.chain( textTween2 );
    textTween2.chain( textTween3 );
    currentTween.start();
  }
]

function advanceSlide() {
  clearCanvas();
  if (currentTween) currentTween.stop();
    
  var f = slideFunctions[++slideIndex];
  if (f != undefined)
    f();
}

function reverseSlide() {
  clearCanvas();
  if (currentTween) currentTween.stop();
    
  var f = slideFunctions[--slideIndex];
  if (f != undefined)
    f();

}

function animate(time) {
  requestAnimationFrame( animate );
  TWEEN.update(time);
}

ctx.font = "36pt Roboto";
ctx.fillText("Loading...", 100, 100);
    

init();
animate();
