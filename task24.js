const text = '{ "name":"John", "age":"39", "city":"New York"}';
console.log(
  JSON.parse(text, (key, value) =>
    key === 'city' ? value.toUpperCase() : value
  )
);
