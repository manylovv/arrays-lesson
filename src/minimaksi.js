export const getMax = (temps) => {
  let maxTemp = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const temp = temps[i];
    if (temp > maxTemp) {
      maxTemp = temp;
    }
  }
  return maxTemp;
};

export const getMin = (temps) => {
  let minTemp = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const temp = temps[i];
    if (temp < minTemp) {
      minTemp = temp;
    }
  }
  return minTemp;
};
