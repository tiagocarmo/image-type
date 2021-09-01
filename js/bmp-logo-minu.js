var rangeBMP = document.getElementById('range-bmp');
var BMPImage = document.getElementById('bmp-img');

rangeBMP.oninput = function() {
  BMPImage.style = `transform: scale(${this.value})`;
}
