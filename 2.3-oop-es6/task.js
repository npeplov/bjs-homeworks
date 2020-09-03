// классы печатных изданий (книг, журналов) 

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(newState) {
        if (newState > 100)
            this._state = 100;
        else if (newState < 0)
            this._state = 0;
        else
            this._state = newState;
    }
    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(...args) {
        super(...args);
        this.type = "magazine"
    }
}
class Book extends PrintEditionItem {
    constructor(author, ...args) {
        super(...args);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "detective";
    }
}
// класс самой библиотеки
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book._state > 30)
            this.books.push(book);
    }
    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] == value)
                return book;
        }
        return null; 
    }
    giveBookByName(bookName){
        let requestedBook = this.findBookBy("name", bookName);

        if (requestedBook !== null) {
            requestedBook = this.books.splice( requestedBook , 1)[0];
        }
        return requestedBook;
    }
}
// школьный журнал
class StudentLog {
    constructor(name) {
        this.name = name;
        this.gradesArr = {};
    }
    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (this.gradesArr[subject] == undefined) 
            this.gradesArr[subject] = [];
        
        if (grade > 0 && grade < 6) 
            this.gradesArr[subject].push(grade);
        
        else
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);

        return this.gradesArr[subject].length;
    }

    getAverageBySubject(subject) {
        let marks = this.gradesArr[subject]
        if (marks.length === 0) 
            return 0;
    
        else {
            let sum = 0;
            for (let i=0; i < marks.length; i++) 
                sum += marks[i];

            const average = sum / marks.length;
            return +average.toFixed(2);
        }
    }

    getTotalAverage() {
        let sum = 0;
        for (let subject in this.gradesArr) 
            sum += this.getAverageBySubject(subject);

        return sum / Object.values(this.gradesArr).length;
    }
}