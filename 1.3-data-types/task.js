"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {

    let totalAmount; let inputTypeError = [];

    !Number.isNaN(+percent)
        ? percent = +percent
        : inputTypeError = ['процент', percent];
    
    !Number.isNaN(+contribution)
        ? contribution = +contribution
        : inputTypeError = ['1-й взнос', contribution];

    !Number.isNaN(+amount)
        ? amount = +amount
        : inputTypeError = ['сумма кредита', amount];

    if (inputTypeError.length != 0)
        totalAmount = `Параметр ${inputTypeError[0]} содержит неправильное значение ${inputTypeError[1]}`;

    else {
        let loan = amount - contribution;
        let months = (date.getFullYear() - (new Date).getFullYear()) * 12 + date.getMonth() - (new Date).getMonth();
        let p12 = percent/100 / 12;
        let payment = loan * ( p12 + percent/100 / 12/(( (1 + p12)**months ) - 1) )
        totalAmount = Math.round(payment * months* 100) / 100;
    }

    return totalAmount;
}
function getGreeting(name) {
    if (
            name === null   // null
        ||  !name           // undefined, ""
    )
        name = "Аноним"

    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
}

console.log(calculateTotalMortgage("1",'1000','50000', new Date(new Date().setFullYear(new Date().getFullYear() + 1))))

console.log(getGreeting(""))