/*
[
  [20, 40, 20, 50, 30, -20, 4, 30, -30, 4, 30, 3], // 1924
  [20, 40, 20, 50, 30, -20, 4, 30, -30, 4, 30, 3], // 1925
  [20, 40, 20, 50, 30, -20, 4, 30, -30, 4, 30, 3],
]
*/

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const yearFrom = 1924;
const yearTo = 2024;

const generateData = () => {
  const tempByYears = [];
  const minTemp = -20;
  const maxTemp = 35;

  for (let year = yearFrom; year < yearTo; year++) {
    const months = Array.from({ length: 12 }).map(() =>
      random(minTemp, maxTemp)
    );

    tempByYears.push(months);
  }

  return tempByYears;
};

const result = generateData();

Bun.write(`./${yearFrom}-${yearTo}.json`, JSON.stringify(result, null, 2));
