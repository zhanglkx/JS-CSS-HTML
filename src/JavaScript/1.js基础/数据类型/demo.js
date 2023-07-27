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
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
  if (nums.length === 0) return init;
  let i = 0;

  while (i <= nums.length - 1) {
    init = fn(init,nums[i]);
    i++;
  }
  return init;
};

function sum(accum, curr) {
  return accum + curr;
}

console.log(reduce([1, 2, 3, 4], sum,0));
