Array.from({ length: 20 }).map((_, i) =>
  (i + 1) % 2 === 0 ? console.log(`${i+1} is even.`) : console.log(`${i+1} is odd.`)
);
