const test = ['abc', 'bcd', 'cde'];
test.forEach(x => console.log(x));
for (const key in test) {
  console.log(key)
}

for (const value of test) {
  console.log(value)
}