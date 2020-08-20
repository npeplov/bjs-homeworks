"use strict";

function getResult(a,b,c){

    let d = b**2 - 4*a*c;
    let x = [];

    if (d >= 0)
        x[0] = (-b + Math.sqrt(d)) / 2*a;

    if (d > 0)
        x[1] = (-b - Math.sqrt(d)) / 2*a;

    return x;
}

function getAverageMark(marks){
    let averageMark = 0;

    if (marks.length > 5) {
        console.log("Оценок больше 5, считаю среднюю первых 5-ти")
        marks.splice(5, marks.length-5)
    }
    
    if (marks.length != 0) {
        for (let i = 0; i < marks.length; i++) 
            averageMark += marks[i];
        
        averageMark = averageMark / marks.length
    }

    return averageMark;
}

function askDrink(name, dateOfBirthday){

    // let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    // let result;

    // if (age >= 18)
    //     result = `Не желаете ли олд-фэшн, ${name}?`

    // else
    //     result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`

    let result = ( (new Date().getFullYear() - dateOfBirthday.getFullYear()) >= 18 ) 
        ? `Не желаете ли олд-фэшн, ${name}?`
        : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`

    return result;
}

console.log(askDrink("nik", new Date(2982, 28, 5)))