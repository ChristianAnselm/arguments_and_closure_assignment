// function double(num){
//   return (num * 2)
// }
//
// const double = num => num * 2
// // console.log(double(8));
// //
// const square = (num) => num * num
//
// // console.log(square(10));
// //
// //
// function doubleSquare(num) {
//   return square(double(num))
// }
// console.log(doubleSquare(10));
// //
// //
// function classyGreeting(firstName, lastName) {
//   return ("hello there " + firstName + lastName)
// }
// // console.log(classyGreeting('sexy ','lady'));
// //
// // function yell(str) {
// //   let answer = str.toUpperCase()
// //   return answer
// // }
// // console.log(yell('yerrrrr'));
// // //
// function yellGreeting(str1, str2){
//   for (var i = 0; i < str1.length; i++) {
//     str1[i]
//   } toUpperCase([i])
//
// return ("AYYOOO "+ str1.toUpperCase + ' ' + str2.toUpperCase)
// }
// console.log(yellGreeting('chris', 'tian'));
const adder = num1 => num2 => `${num1 + num2}`

console.log(adder(5)(10));
