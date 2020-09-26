function oddOrEven(num) {
  return num % 2 === 0 ? 'even' : 'odd';
}
const numbers = [1, 2, 3, 4, 5];
// for (let number in numbers) {
//   console.log(numbers[number]);
// }
// for (let number of numbers) {
//   console.log(number);
// }
for (let number = 0; numbers.length > number; number++) {
  console.log(numbers[number]);
}
// console.log(number);
// console.log(oddOrEven, num);
// console.log(console.log);
// console.log(oddOrEven(number));
