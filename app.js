// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2
const myArr = [1, 2, 3];
// let sum = 0;
// for (const n of myArr) {
//   console.log(n);
//   sum += n;
// }
// console.log(sum / myArr.length);
// console.log(myArr);
function avg(myArr) {
  let sum = 0;
  for (const n of myArr) {
    // console.log(n);
    sum += n;
  }
  // console.log(sum / myArr.length);
  // console.log(myArr);
  return sum / myArr.length;
}
