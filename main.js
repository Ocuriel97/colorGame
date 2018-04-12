let numSquares = 6;
let colors = genColors(numSquares);
let pickedColor;

let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let msg = document.querySelector('#msg');
let header = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeBtns = document.querySelectorAll('.mode');

init();

function init () {
  //mode and sets color
  for (let i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener('click', function () {
      modeBtns[0].classList.remove('selected');
      modeBtns[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'EASY' ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
  //makes all squares clickable
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
  reset();
}

function reset () {
  colors = genColors(numSquares);
  pickedColor = pickColor();
  msg.textContent = '';
  resetButton.textContent = 'new colors';
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  header.style.backgroundColor = 'steelblue';
};

resetButton.addEventListener('click', function () {
  reset();
});

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
