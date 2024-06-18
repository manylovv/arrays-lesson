const styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

const mI = (styles.length - 1) / 2;
// styles.splice(mI, 1, "Classics");
styles[mI] = "Classics";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Reggae");
styles.unshift("Rap");
console.log(styles);
