export const calcAvg = (temps) => {
  let sumTemps = 0;
  for (let i = 0; i < temps.length; i++) {
    const temp = temps[i];
    sumTemps = sumTemps + temp;
  }

  const avgTemps = sumTemps / temps.length;
  return avgTemps;
};
