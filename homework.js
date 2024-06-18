const tempsByYears = await Bun.file('./1924-2024.json').json();

const getMonthsTempsByYear = (year) => {
  let year = 1924;

  for (let i = 0; i < tempsByYears.length; i++) {
    console.log(year, tempsByYears[i]);

    year++;
  }

  // return [ 7, 33, 10, 20, -13, 21, -17, 0, -8, 4, 33, -8 ]
};

getMonthsTempsByYear(1925);
