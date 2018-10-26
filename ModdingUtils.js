function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomDecimalInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function randomVelocity(speed) {
  let phi = 2 * Math.PI * Math.random();
  let vx = speed * Math.cos(phi);
  let vy = speed * Math.sin(phi);
  
  return {"vx":vx, "vy":vy};
}

function chooseRandom(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function chooseRandomIdx(choices) {
  let idx = Math.floor(Math.random() * choices.length);
  let choice = choices[idx];
  
  return {"choice":choice, "idx":idx};
}

function chooseRandomChance(choices) {
  let totalChance = 0;
  
  for (let choice of choices) {
    totalChance += choice.chance;
  }
  
  let decider = Math.random() * totalChance;
  let accumulatedChance = 0;
  
  for (let choice of choices) {
    accumulatedChance += choice.chance;
    
    if (decider < accumulatedChance) {
      return choice.value;
    }
  }
}
