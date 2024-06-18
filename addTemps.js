export const addTemps = (newTemps, temps) => {
  for (let i = 0; i < newTemps.length; i++) {
    const newTemp = newTemps[i];
    temps.push(newTemp);
  }
};
