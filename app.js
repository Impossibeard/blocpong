///blank canvas
var a_canvas = document.getElementById("a");

//onclick canvas
function draw_b() {
    var b_canvas = document.getElementById("b");
    var b_context = b_canvas.getContext("2d");
    b_context.fillRect(50, 25, 150, 100);
}

//grid canvas
var c_canvas = document.getElementById("c");
var context = c_canvas.getContext("2d");

//draw vertical lines
for (var x = 0.5; x < 500; x += 10) {
    context.moveTo(x, 0);
    context.lineTo(x, 375);
}

//draw horizontal lines
for (var y = 0.5; y < 375; y += 10) {
    context.moveTo(0, y);
    context.lineTo(500, y);
}
//off-white color
context.strokeStyle = "#eee";
context.stroke();

context.beginPath();
//horizontal arrow
context.moveTo(0, 40);
context.lineTo(240, 40);
context.moveTo(260, 40);
context.lineTo(500, 40);
context.moveTo(495, 35);
context.lineTo(500, 40);
context.lineTo(495, 45);

//vertical arrow
context.moveTo(60, 0);
context.lineTo(60, 153);
context.moveTo(60, 173);
context.lineTo(60, 375);
context.moveTo(65, 370);
context.lineTo(60, 375);
context.lineTo(55, 370);

//black color
context.strokeStyle = "#000";
context.stroke();

//x and y text measured from baseline
context.font = "bold 12px sans-serif";
context.fillText("x", 248, 43);
context.fillText("y", 58, 165);

//top coordinate text measured from top left corner
context.textBaseline = "top";
context.fillText("( 0 , 0 )", 8, 5);

//bottom coordinate text measured from top left corner
context.textAlign = "right";
context.textBaseline = "bottom";
context.fillText("( 500 , 375 )", 492, 370);

//corner dots
context.fillRect(0, 0, 3, 3);
context.fillRect(497, 372, 3, 3);

//gradient canvas
var d_canvas = document.getElementById("d");
var context = d_canvas.getContext("2d");

//create a gradient object shading from left to right
var my_gradient = context.createLinearGradient(0, 0, 300, 0);
//to shade top to bottom: (0, 0, 0, max_height)
//to shade diagonal: (0, 0, max_width, max_height)

//gradient color positions between 0 and 1
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");

//set fillStyle to gradient and draw a shape
context.fillStyle = my_gradient;
context.fillRect(0,0,300,255);

//drawing an image
var canvas = document.getElementById("e");
  var context = canvas.getContext("2d");
  var cat = new Image();
  cat.src = "/cat.png";
  cat.onload = function() {
    context.drawImage(cat, 0, 0);
  };

//multicat
cat.onload = function() {
  for (var x = 0, y = 0;
       x < 500 && y < 375;
       //repeats the image at this translated location
       x += 25, y += 19) {
      //last 2 params scale the image
    context.drawImage(cat, x, y, 44, 28);
  }
};