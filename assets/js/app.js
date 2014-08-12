
var slideIndex = -1;

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

function init() {
  // Setup kibo
  var k = new Kibo();
  k.down(['space', 'right', 'enter'], advanceSlide);
  k.down('left', reverseSlide);
}

function clearCanvas() {
  canvas.width = canvas.width;
}

// Setup list of functions
var slideFunctions = [
  function() {
    clearCanvas();
    ctx.font = "36pt 'Alex Brush'";
    ctx.fillText("Welcome", 100, 100);
    ctx.fillText("Hit enter to start", 100, 200);
  },
  function(){ clearCanvas();console.log("b")}
    
]
console.log(slideFunctions);

function advanceSlide() {
  var f = slideFunctions[++slideIndex]
  if (f != undefined)
    f();
}

function reverseSlide() {
  var f = slideFunctions[--slideIndex]
  if (f != undefined)
    f();
}

function animate() {
  requestAnimationFrame( animate );
  TWEEN.update(time);
}

init();