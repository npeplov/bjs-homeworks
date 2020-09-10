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
	// Замедление на половину секунды.
	console.log('sleep 1000');
	sleep(100);
	return args.reduce((sum, arg) => {
	  return sum += +arg;
	}, 0);
}

function compareArrays(arr1, arr2) {

	function bigTen(elemArr1, index) {
		return elemArr1 === arr2[index];
	}

	// без скобок bigTen - это указатель на описание функции
	// т.е. вставится ее код, а не то что она возвращает
	return arr1.every(bigTen);
}

function memorize(fn, limit) {
	let memory = [];
	
	// memory.push({args, fn});
	return (...args) => fn(...args);
}

const mSum = memorize(sum, 5);
// console.log(mSum(1,2));

// mSum - функция memorize, которая вызывает функцию sum
// как получить аргументы, переданные в mSum (1,2)?

function createCounter(start) {
	console.log('createCounter', start+1)
	return function(){
		console.log('function', start++);
	}
}

let tick=createCounter(1),
	tick10=createCounter(10);

tick();
tick();
tick();
tick10();
tick10();
tick10();
tick10();
tick10();
