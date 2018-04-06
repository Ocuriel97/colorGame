let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let msg = document.querySelector('#msg');
let pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

for (var i = 0; i < colors.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener('click', function () {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      msg.textContent = 'Correct!';
      changeColor(clickedColor);
    } else {
      this.style.backgroundColor = '#232323';
      msg.textContent = 'Try Again!';
    }
  });
}

function changeColor (color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor () {
  //pick random number
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
