// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday'
// ];
// console.log(days[new Date().getDay()]);

console.log(new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date()));
