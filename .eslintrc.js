module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "plugin:vue/essential",
  "parserOptions": {
    "ecmaVersion": 12,
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  //Rules：开启某些规则，也可以设置规则的等级。
  "rules": {}
//     "off" 或者 0：关闭规则。
// "warn" 或者 1：打开规则，并且作为一个警告（不影响exit code）。
// "error" 或者 2：打开规则，并且作为一个错误（exit code将会是1）。
//     下面的一些配置规则：
//
// "no-console":"off" 禁用 console。
// "no-unused-vars":2 禁止出现未使用过的变量。
// "no-use-before-define":2 不允许在变量定义之前使用它们。
// "linebreak-style":[2, "unix"] 强制使用一致的换行风格。
// "quotes": ["error", "single"] 强制使用一致的单引号。
// "semi":["error", "always"] 控制行尾部分号。
// "curly":["error", "all"] 强制所有控制语句使用一致的括号风格。
// "default-case": "error" switch 语句强制 default 分支，也可添加 // no default 注释取消此次警告。
//     "no-else-return":"error" 禁止 if 语句中有 return 之后有 else。
//     "no-implicit-coercion": "error" 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
// "no-invalid-this": "error" 禁止 this 关键字出现在类和类对象之外。
// "no-loop-func":"error" 禁止在循环中出现 function 声明和表达式。
// "no-multi-spaces":"error" 禁止使用多个空格。
// "no-new-func":"error" 禁止对 空Function 对象使用 new 操作符。
// "no-useless-return":"error" 禁止没有任何内容的return;
//     "global-require": "error" 要求 require() 出现在顶层模块作用域中。
// "no-path-concat": "error" 禁止对 dirname 和 filename进行字符串连接
//     "no-sync": "error" 禁用同步方法。
// "array-bracket-spacing": ["error", "never"] 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格。
// "block-spacing": ["error", "always"] 禁止或强制在单行代码块中使用空格(禁用)。
// "brace-style": ["error", "1tbs"]
//     "camelcase": "error" 强制驼峰法命名。
// "comma-dangle": ["error", "always-multiline"] 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗,always-multiline：多行模式必须带逗号，单行模式不能带逗号号。
// "comma-spacing": ["error", { "before": false, "after": true }] 控制逗号前后的空格。
// "comma-style": ["error", "last"] 控制逗号在行尾出现还是在行首出现 (默认行尾)。
// "key-spacing": ["error", { "beforeColon": false, "afterColon": true }] 该规则规定了在对象字面量语法中，key和value之间的空白，冒号前不要空格，冒号后面需要一个空格。
// "lines-around-comment": ["error", { "beforeBlockComment": true }] 要求在注释周围有空行 ( 要求在块级注释之前有一空行)。
// "newline-after-var": ["error", "always"] 要求或禁止 var 声明语句后有一行空行。
// "newline-before-return": "error" 要求 return 语句之前有一空行。
// "no-multi-assign": "error" 链接变量的赋值可能会导致意外的结果并难以阅读，不允许在单个语句中使用多个分配。
// "max-params": [1, 3] function 定义中最多允许的参数数量。
// "new-cap": ["error", { "newIsCap": true, "capIsNew": false}] 构造函数首字母大写。
// "no-multiple-empty-lines": ["error", {"max": 2}] 空行不能够超过2行。
// "no-shadow-restricted-names": "error" 禁止对一些关键字或者保留字进行赋值操作，比如NaN、Infinity、undefined、eval、arguments等。
// "no-undef-init": "error" 禁止把undefined赋值给一个变量。
// "keyword-spacing": "error" keyword 前后需要空格。
// "space-before-blocks": ["error","always"] 强制在块之前使用一致的空格。
};
