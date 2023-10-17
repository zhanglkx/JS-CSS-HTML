/**
 * JS数据类型
 *
 */

// Number：用于表示数值，包括整数和浮点数。
// String：用于表示文本数据。
// Boolean：有两个值，true和false，用于进行逻辑操作。
// Null：有一个值null，表示一个空值。
// Undefined：表示变量未定义。
// Symbol：表示独一无二的值，通常用于对象属性的键。
// BigInt：用于存储大于2^53-1的整数。
// 对象（Object）类型

let type= '';

type = typeof 1;
console.log(type);

type = typeof '1';
console.log(type);

type = typeof true;
console.log(type);

type = typeof null;
console.log(type);

type = typeof undefined;
console.log(type);

type = typeof Symbol(1);
console.log(type);

type = typeof 9007199254740993n;  // 使用n后缀表示BigInt类型 
console.log(type);

type = typeof {name:1,age:1};   
console.log(type);


function fun(params) {
    console.log(params);
}

type = typeof fun;  // 使用n后缀表示BigInt类型 
console.log(type);


const  arrowFun = ()=>{
    console.log(1);
}

type = typeof arrowFun;
console.log(type);