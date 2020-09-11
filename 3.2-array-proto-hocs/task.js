"use strict"
// Создайте функцию, которая сможет 
// “запоминать” результаты другой функции,
// которую ей передают в качестве аргумента.

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

// 2.1.2. sum
function sum(...args) {
  console.log('sleep 500');
	sleep(500);
	return args.reduce((sum, arg) => sum += +arg, 0);
}

function compareArrays(arr1, arr2) {
  return (arr1Elem, index) => {
    console.log(arr1Elem);
     arr1Elem === arr2[index];
  }
	// без скобок bigTen - это указатель на описание функции, вставится её код, а не return
}

console.log(compareArrays([1,2],[1,2])());


function memorize(fn, limit) {

  const memory = [];

  return (...args) => { // <- сюда передаст свои аргументы
    const argument = [...args]; // <- fn, если выполнить

    const matchIsFound = memory.find(
      (element) => 
        compareArrays(element.args, argument)
    )

    if (matchIsFound)
      return matchIsFound.result;

    memory.push({
      args, result: fn(...args)
    });

    if (memory.length > limit)
      memory.splice(0, 1);

    return memory[memory.length - 1].result;
  }
}

