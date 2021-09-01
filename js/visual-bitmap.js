let arrayVisualBitmap = [
//    0,     1,      2,      3,    4,       5,       6,    7,      8
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],  // 0
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],  // 1
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],  // 2
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],  // 3
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],  // 4
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],  // 5
  [gray,  gray,  white, yellow, cyan,   green,  magenta, red,   blue],  // 6
  [black, black, blue,  black,  magenta, black, cyan,    black, white], // 7
  [black, black, blue,  black,  magenta, black, cyan,    black, white]  // 8
];

// console para explicação
console.table(arrayVisualBitmap);

// visualBitMap
const visualBitMap = document.querySelector('#visualBitMap');
createFakeBitMap(arrayVisualBitmap, visualBitMap);

// spaceInvaders
const spaceInvaders = document.querySelector('#spaceInvaders');
createFakeBitMap(arraySpaceInvaders, spaceInvaders);

// iconMinu
const iconMinu = document.querySelector('#iconMinu');
createFakeBitMap(arrayIconMinu, iconMinu);
