for (let i = 200; i > 0; i--) {
  let containerDiv = document.getElementById('container');
  let newDiv = document.createElement('div');
  newDiv.className = 'art';
  newDiv.style.backgroundColor = 'white';
  containerDiv.appendChild(newDiv);
}


const canvas = document.querySelectorAll('.art');
console.log(canvas);

canvas.forEach(pixel => pixel.addEventListener('mousemove', function() {
  changePixel(pixel);
}))

function changePixel(pixel) {

  color = getColor();
  pixel.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

function getColor() {
  let colorArray = [];
  for (i = 0; i < 3; i++) {
    colorArray.push(Math.floor(Math.random() * 255));
  };
  return colorArray;
}
