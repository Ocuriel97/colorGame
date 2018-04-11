let numSquares = 6;
let colors = genColors(numSquares);

let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let msg = document.querySelector('#msg');
let header = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');
let pickedColor = pickColor();

easyBtn.addEventListener('click', function () {
  hardBtn.classList.remove('selected');
  easyBtn.classList.add('selected');
  numSquares = 3;
  colors = genColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

hardBtn.addEventListener('click', function () {
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numSquares = 6;
  colors = genColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
  }
});

colorDisplay.textContent = pickedColor;

resetButton.addEventListener('click', function () {
  colors = genColors(numSquares);
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
