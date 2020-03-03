const values = ['ABC', 'GHI', 'DEF', 'JKL'];
const pipe = (...fns) =>
  fns.reduce((result, next) => (...args) => next(result(...args)));

const one = array => {
  const test = array.filter(x => x !== 'JKL');
  console.log(test);
  return test;
};

const two = array => {
  const test = [...array, 'PQR'];
  console.log(test);
  return test;
};

const three = array => {
  const test = array.filter(x => x !== 'ABC');
  console.log(test);
  return test;
};

const four = array => {
  const DEF = array.indexOf('DEF');
  const PQR = array.indexOf('PQR');
  array.splice(DEF, 1, 'WER');
  array.splice(PQR, 1, 'ERT');
  console.log(array);
  return [...array];
};

const five = array => {
  const test = array.concat([1, 2, 3]);
  console.log(test);
  return test;
};

const six = array => {
  const test = array.sort();
  console.log(test);
  return test;
};

const seven = array => {
  const test = array.reverse();
  console.log(test);
  return test;
};

const eight = () => {
  const test = [1,2,3].map(x => x * 2);
  console.log(test);
  return test;
}

const test = pipe(one, two, three, four, five, six, seven, eight);
test(values);
