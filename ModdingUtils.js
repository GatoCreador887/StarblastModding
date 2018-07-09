function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomDecimalInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function randomVelocity(speed) {
  var phi = 2 * Math.PI * Math.random();
  var vx = speed * Math.cos(phi);
  var vy = speed * Math.sin(phi);
  
  return {vx:vx,vy:vy};
}

function chooseRandom(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}
