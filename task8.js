Array.from({ length: 12 }).map(
  (_, i) => (i + 1) % 4 === 0 && console.log(i + 1)
);
