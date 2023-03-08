const pickRandom = function pickRandom(array) {
  return array[Math.random() * array.length | 0];
};
