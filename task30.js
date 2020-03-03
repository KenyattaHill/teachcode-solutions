
const startCounter = (initalValue = 0) => {
  let counter = initalValue;
  return () => {
    counter++;
    process.stdout.write(`${counter} `);
  };
};

const interval = setInterval(startCounter(), 1000);

setTimeout(() => clearInterval(interval), 6000);
