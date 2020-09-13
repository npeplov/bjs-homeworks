"use strict"
// Default 4,3 GHz
// sum: 8679.829ms
// mSum: 11799.855ms

// overclocked 4,7 GHz
// sum: 7872.013ms
// mSum: 10922.515ms

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
  if (arr1.length === arr2.length)
  return arr1.every( 
    (elem, index) => elem === arr2[index]
  )          // по дефолту ретурн включен
}

// 2.2 Создайте функцию-обертку, которая сможет “запоминать” результаты другой функции, которую ей передают в качестве аргумента.
function memorize(fn, limit) {
  const memory = [];

  return (...rest) => {
    const matchIsFound = memory.find( (element) => 
         compareArrays(element.rest, rest)
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

// 3. TestCase Ваша функция testCase должна принимать функцию testFunction, и название таймера процессорного времени.
function testCase(testFunction, timername) {
  return (...rest) => {
    console.time(timername);
    const argums = [...rest[0]];

    for (let i = 0; i < 100000000; i++) {
      argums.forEach(spread => {
        testFunction(...spread);
      });
    }

    console.timeEnd(timername);
    return;
  }
}

const testSum = testCase(sum, "sum");
const testMSum = testCase(mSum, "mSum");

const argsArrays = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];

testSum(argsArrays);
testMSum(argsArrays);