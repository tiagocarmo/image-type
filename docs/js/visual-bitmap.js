let arrayVisualBitmap = [
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],
  [black, black, blue,  black,  magenta, black, cyan,    black, white]
];

// console para explicação
console.table(arrayVisualBitmap);

// visualBitMap
const visualBitMap = document.querySelector('#visualBitMap');
createFakeBitMap(arrayVisualBitmap, visualBitMap);


/** SPOILER ALERT **/


// spaceInvaders
const spaceInvaders = document.querySelector('#spaceInvaders');
createFakeBitMap(arraySpaceInvaders, spaceInvaders);

// iconMinu
const iconMinu = document.querySelector('#iconMinu');
createFakeBitMap(arrayIconMinu, iconMinu);
