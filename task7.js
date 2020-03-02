[
  (x, y, z) => x > y && x < z,
  (x, y, z) => x < y || x > z,
  (x, y) => !(y < x)
].forEach(operation => console.log(operation(...[34, 23, 1])));
