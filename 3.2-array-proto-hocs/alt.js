
let a = 5;
function outerFunction(...outerArgs) {
    function innerFunction(...innerArgs) {
        return innerArgs;
    }
    console.log(outerArgs);
    a = 6;

    return innerFunction;
}

// console.log(a);
// console.log(typeof(innerFunctionLink));
// console.log(innerFunctionLink('inside'));

// const regularFunction = function(args) { return args; } // function - по имени regularFunction

// console.log(regularFunction); // [Function: regularFunction]
// console.log(outerFunction); // [Function: outerFunction]

const innerFunctionLink = outerFunction('Args in outerFunction'); // результат выполнения функции внутри memorize = ссылка на функцию inner
// console.log(innerFunctionLink); // [Function: innerFunction]

console.log(outerFunction('Args in outerFunction'));