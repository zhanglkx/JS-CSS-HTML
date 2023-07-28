/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// const filter = function(arr, fn) {
//   let filterArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       filterArr.push(arr[i]);
//     }
//   }
//   return filterArr;
// };
// 过滤数组中元素
// /**
//  * @param {number[]} nums
//  * @param {Function} fn
//  * @param {number} init
//  * @return {number}
//  */
// const reduce = function(nums, fn, init) {
//   if (nums.length === 0) return init;
//   for (const num of nums) {
//     init = fn(init,num);
//   }
//   return init;
// };
//
// function sum(accum, curr) {
//   return accum + curr;
// }
//
// console.log(reduce([1, 2, 3, 4], sum,0));


// /**
//  * @param {Function[]} functions
//  * @return {Function}
//  */
// const compose = function(functions) {
//   return function(x) {
//     for (let i = functions.length-1; i >= 0; i--) {
//       x = functions[i](x);
//     }
//     return x;
//   };
// };
//
//
// const fn = compose([x => x + 1, x => 2 * x]);
// // 9
// console.log(fn(4));
