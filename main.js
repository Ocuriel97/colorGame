let colors = genColors(6);

let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let msg = document.querySelector('#msg');
let header = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

resetButton.addEventListener('click', function () {
  colors = genColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  header.style.backgroundColor = '#232323';
});

for (var i = 0; i < colors.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener('click', function () {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      msg.textContent = 'Correct!';
      resetButton.textContent = "Play Again?";
      changeColor(clickedColor);
      header.style.backgroundColor = pickedColor;
    } else {
      this.style.backgroundColor = '#232323';
      msg.textContent = 'Try Again!';
    }
  });
};

function changeColor (color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  };
};

function pickColor () {
  //pick random number
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function genColors (num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  };
  return arr;
};

function randomColor () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
