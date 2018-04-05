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
let pickedColor = colors[3];

colorDisplay.textContent = pickedColor;

for (var i = 0; i < colors.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener('click', function () {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      alert('correct');
    }
  });
}
