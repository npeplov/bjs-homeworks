function parseCount(input) {
    const result = Number.parseInt(input);

    if (isNaN(result)) {
        const errorNaN = new Error("Невалидное значение");
        throw errorNaN;
    }
    return result;
}

function validateCount(input) {
    try { 
        // 1. фунция пробует преобразовать строку в число
        return parseCount(input);
    }

    // 2. если вылетает ошибка, выполняется кетч
    catch(e) { // <- в (e) передается errorNaN
        return e;
    }
}

// Треугольник
class Triangle {
    constructor(a, b, c) {
        if ( 
            (a + b) < c ||
            (a + c) < b ||
            (b + c) < a
        ) {
            const errorTriangleSides = new Error("Треугольник с такими сторонами не существует");
            throw errorTriangleSides;
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        const p = this.getPerimeter() / 2;
        return +Math.sqrt( p*(p-this.a)*(p-this.b)*(p-this.c) ).toFixed(3);
    }
}

let triangle = new Triangle(1,2,3);

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch(e) {
        const anotherTriangle = {
            getArea: function () {
                // return this.error();
            },
            getPerimeter: 1
            // function () {
                // return this.error();
            // },
            // error: () => { return "Ошибка! Треугольник не существует"; }
        }
        return anotherTriangle;
    }
    finally {
        console.log('Но Все равно давай досвиданья')
    }
}
// const triangle = getTriangle(1,3,100);
// triangle.getArea();
// console.log(triangle.getPerimeter());