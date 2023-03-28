//=> 25
var memoize = function (f) {
    var cache = {};

    return function () {
        var arg_str = JSON.stringify(arguments);
        cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
        return cache[arg_str];
    };
};
var squareNumber1 = memoize(function (x) {
    return x * x;
});

squareNumber1(4);
//=> 161

squareNumber1(4); // 从缓存中读取输入值为 4 的结果
//=> 16

squareNumber1(5);
//=> 25

squareNumber1(5); // 从缓存中读取输入值为 5 的结果

console.log(squareNumber1(5))
