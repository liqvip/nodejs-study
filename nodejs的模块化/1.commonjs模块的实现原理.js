/**
 * 原 hello.js 代码
 * @type {string}
 */
let s = 'hello';
let name = 'world';

console.log(s + ' ' + name);

/**
 * node.js 加载了 hello.js 之后的代码
 * 实现“模块”功能的奥妙就在于JavaScript是一种函数式编程语言，它支持闭包。
 * 如果我们把一段JavaScript代码用一个函数包装起来，这段代码的所有“全局”变量就变成了函数内部的局部变量。
 */
(
    function (){
        let s = 'hello';
        let name = 'world';

        console.log(s + ' ' + name);
        // hello.js 代码结束
    }
)();

/**
 * module.exports 的实现
 * 注意：不能直接使用 exports = 某个值。这样是无效的，这样是在改变 exports 变量的指向，并不会改变 modules.exports 的内容。
 * 使用 require 加载模块时，实际上是加载了 module.exports 对象的值。
 */

// 准备module对象:
let module = {
    id: 'hello',
    exports: {}
};
let load = function (module) {
    // 读取的hello.js代码:
    function greet(name) {
        console.log('Hello, ' + name + '!');
    }

    module.exports = greet;
    // hello.js代码结束
    return module.exports;
};
let exported = load(module);
// 保存module:
save(module, exported);