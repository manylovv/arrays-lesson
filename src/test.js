/* 3. Weather Data Analyzer:
Create an array to store daily temperature data. Allow the user to add temperatures, calculate the average temperature, and find the highest and lowest temperatures recorded. */

import { getMax } from './minimaksi';
import { getMin } from './minimaksi';
import { calcAvg } from './getAvg';
import { addTemps } from './addTemps';

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const temps = [];

for (let y = 1924; y <= 2024; y++) {
  addTemps([random(-20, 35)], temps);
}
console.log(temps);

// addTemps([25, 67, -12, 5, 4], temps);
// const avgTemps = calcAvg(temps);
// const maxTemp = getMax(temps);

// // console.log("Sum:", sumTemps);
// console.log("Avg:", avgTemps);
// console.log("Max:", maxTemp);
// console.log("Min:", getMin(temps));
// console.log(temps);
