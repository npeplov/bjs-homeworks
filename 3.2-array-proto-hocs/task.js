"use strict"
// 2.1 Подготовка
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // console.log('sleep 100'); sleep(100);
	return args.reduce((sum, arg) => sum += +arg, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.every( 
    (elem, index) => elem === arr2[index]
  )          // по дефолту ретурн включен
}

// 2.2 Создайте функцию-обертку, которая сможет “запоминать” результаты другой функции, которую ей передают в качестве аргумента.
function memorize(fn, limit) {
  const memory = [];

  return (...rest) => { // <- сюда передаст свои аргументы
    const args = [...rest]; // <- fn, если выполнить

    const matchIsFound = memory.find(
      (element) => 
        compareArrays(element.rest, args)
    );

    if (matchIsFound)
      return matchIsFound.result;

    memory.push({
      rest, result: fn(...rest)
    });

    if (memory.length > limit)
      memory.splice(0, 1);

    return memory[memory.length - 1].result;
  }
}

const mSum = memorize(sum, 5);
// mSum(1,3);

// 3. TestCase Ваша функция testCase должна принимать функцию testFunction, и название таймера процессорного времени.
function testCase(testFunction, timername) {
  return (...rest) => {
    console.time(timername);
    const argums = [...rest[0]];

    for (let i = 0; i < 1000000; i++) {
      argums.forEach(spread => {
        testFunction(...spread);
      });
    }

    console.timeEnd(timername);
    return '';
  }
}

const testSum = testCase(sum, "sum");
const testMSum = testCase(mSum, "mSum");

const argsArrays = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];

console.log(testSum(argsArrays));
console.log(testMSum(argsArrays));

// sum: 93.541ms
// mSum: 290.876ms

// Наверное, сам движок интерпретатора лучше оптимизирует повторяющиеся вычисления, чем метод сравнения со всеми элементами массива.
// Если его принудительно не тормозить через sleep().