Array.from({ length: 50 }).map(
  (_, i) => (i + 1) % 5 === 0 ? console.log('Buzz') : console.log(i+1)
);
