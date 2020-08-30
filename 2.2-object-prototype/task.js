// для задачи №1
String.prototype.isPalindrome = function() {
    // 1 создать копию строки в обр. порядке
    let reversed = "";
    // 1.1 цикл с последнего элемента
    for (let i = this.length-1; i >= 0; i--){
        reversed += this[i];
    }
    // 2. к нижнему регистру, убрать пробелы, сравнить
    return reversed.toLowerCase().split(' ').join('') === this.toLowerCase().split(' ').join('');
}
// создаем строковый объект "А роза упала на лапу Азора" <= this
console.log( "А роза упала на лапу Азора".isPalindrome() );

// задача №2
function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }

    else {
        let sum = 0;
        for (let i=0; i < marks.length; i++) {
            sum += marks[i];
        }
        const average = sum / marks.length;
        const roundedAverage = Math.round(average);
        return roundedAverage
    }
}
console.log(getAverageMark([3,2,3,4,5]))

// задача №3
function checkBirthday(bdate) {
    const now = new Date();

    const birthday = new Date(bdate);

    const diff = now - birthday;
    const age = diff / 1000 / 60 / 60 / 24 / 365.25;

    return age >= 18;
}
console.log(checkBirthday("1990-01-01"))
