var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");

for (var i = 0; i < squares.length; i++) {
  //for initial colors
  squares[i].style.backgroundColor = colors[i];

  //foe event listeners
  squares[i].addEventListener("click", function() {
    //grab color of the picked square
    var clickedColor = this.style.backgroundColor;
    //compare it with picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColors(pickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
