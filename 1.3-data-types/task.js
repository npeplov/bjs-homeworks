"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;

    let loan = amount - contribution;

    if (date.getFullYear() + (new Date).getFullYear() == date.getMonth() + (new Date).getMonth()) 
        totalAmount = 0;
    
    else {
        let months = (date.getFullYear() - (new Date).getFullYear()) * 12 + date.getMonth() - (new Date).getMonth();
        let p12 = percent/100 / 12;
        let payment = loan * ( p12 + percent/100 / 12/(( (1 + p12)**months ) - 1) )
        totalAmount = (payment * months);
    }

    return Math.round(totalAmount * 100) / 100;
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
console.log(calculateTotalMortgage(10,1000,50000, new Date(new Date().setFullYear(new Date().getFullYear() + 1))))
console.log(getGreeting(""))