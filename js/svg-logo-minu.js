var rangeSVG = document.getElementById('range-svg');
var SVGImage = document.getElementById('svg-img');

rangeSVG.oninput = function() {
  SVGImage.style = `transform: scale(${this.value})`;
}
