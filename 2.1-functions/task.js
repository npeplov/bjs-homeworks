function getSolutions( a, b, c ) {
    const D = b**2 - 4*a*c;
    let roots = [];

    if (D == 0) {
        const x1 = -b / 2*a;
        roots = [x1];
    }

    if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / 2*a;
        const x2 = (-b - Math.sqrt(D)) / 2*a;
        roots = [x1, x2]
    }
    
    return {D, roots};
}

function showSolutionsMessage( a, b, c ) {
    const result = getSolutions( a, b, c );

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.roots.length === 0) 
        console.log(`Уравнение не имеет вещественных корней`);
    if (result.roots.length === 1)
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    else
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
}

function getAverageScore(data) {
    let average = 0, quantity = 0;
    let result = {average};

    for (subject in data) {
        result[subject] = getAverageMark(data[subject]);
        average += result[subject];
        quantity++;
    }

    if (quantity > 0)
        result.average = average / quantity;

    return result;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }

    else {
        let sum = 0;
        for (let i=0; i < marks.length; i++) {
            sum += marks[i];
        }
        return sum / marks.length;
    }
}

function getPersonData(secretData) {
    for (key in secretData) {
        if (key === "aaa")
            firstName = getDecodedValue(secretData[key])
        else
            lastName = getDecodedValue(secretData[key])
    }
    return { firstName: firstName, lastName: lastName }
}

function getDecodedValue(secret) {
    if (secret == '0')
        return "Родриго";
    else
        return "Эмильо"
}

console.log(getAverageScore({
    algebra: [1,2,3,4,5],
    geometry: [3,4,5,4,3],
    matan: [2,2,2,2,2]
}))

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}))