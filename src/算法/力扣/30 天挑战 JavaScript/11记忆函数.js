/**
 * @param {Function} fn
 */
function memoize(fn) {
  let maps = [];
  let obj = { arg: [], result: 0 };
  return function(...args) {
    let filterResult = maps.filter(word => word.arg.toString() === args.toString());
    if (filterResult.length > 0)
      return filterResult[0].result;
    obj.arg = args;
    obj.result = fn(...args);
    maps.push(obj);
    return obj.result;
  };
}


let callCount = 0;


factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1))

let memoizedFn = memoize(factorial)


// memoizedFn(2, 3); // 5
// memoizedFn(2, 3); // 5
console.log(memoizedFn(2));
console.log(memoizedFn(3));
console.log(memoizedFn(2));
console.log(memoizedFn(3));
console.log(callCount); // 1

