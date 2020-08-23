"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount; 
    let inputTypeError = new Map([
        [percent, "процент"],
        [contribution, "1-й взнос"],
        [amount, "сумма кредита"]
    ]);

    for (let key of inputTypeError.keys()) {
        if (!Number.isNaN(+key))
            inputTypeError.delete(key);
        else {
            totalAmount = `Параметр "${inputTypeError.get(key)}" содержит неправильное значение "${key}"`;
        }
    }

    if (inputTypeError.size == 0) {
        let loan = amount - contribution;
        let months = (date.getFullYear() - (new Date).getFullYear()) * 12 + date.getMonth() - (new Date).getMonth();
        let p12 = percent/100 / 12;
        let payment = loan * ( p12 + percent/100 / 12/(( (1 + p12)**months ) - 1) );
        totalAmount = Math.round(payment * months* 100) / 100;
    }
    return totalAmount;
}

function getGreeting(name) {
    if (
            name === null   // null
        ||  !name           // undefined, ""
    )
        name = "Аноним";

    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
}

console.log(calculateTotalMortgage("1",1000,'50000', new Date(new Date().setFullYear(new Date().getFullYear() + 1))));

console.log(getGreeting(""));
