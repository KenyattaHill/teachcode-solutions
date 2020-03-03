const add = (x, y) => x + y;
[[1, 2], [10, 15], [100, 400]].forEach(numbers => console.log(add(...numbers)));