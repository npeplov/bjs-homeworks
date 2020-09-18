class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null; // для хранения id таймера без начального значения.
    }
    addClock(time, callback, id) { // добавляет новый звонок в коллекцию существующих
        if (!id)
            throw new Error('Не указан id');

        if (this.alarmCollection.length === 0) {
            this.alarmCollection.push({time, callback, id});
            return;
        }

        const existId = this.alarmCollection.find(value => value.id == id);

        if (existId) {
            console.log("Ошибка, такой id уже есть", existId);
            return;
        }

        this.alarmCollection.push({time, callback, id})
    }

    removeClock(id) {// удаляет определённый звонок
        const eraseId = this.alarmCollection.findIndex(value => {
            return value.id === id;
        });

        if (eraseId !== -1) {
            this.alarmCollection.splice(eraseId,1);
            return true;
        }
        else 
            return false;
    }

    getCurrentFormattedTime() { // - возвращает текущее время в строковом формате HH:MM
        const time = new Date();
        let hours = time.getHours();
        let mins = time.getMinutes();

        if (+hours < 10)
            hours = "0" + hours;

        if (+mins < 10)
            mins = "0" + mins;
        
        return hours + ":" + mins
    }

    start() { //запускает все звонки
        // функция проверки (checkClock), которая принимает звонок и проверяет
        // Если значение идентификатора текущего таймера отсутствует, то создайте новый интервал.
        if (this.timerId === null)
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(value => this.checkClock(value))
            }, 1000);

        // Результат функции setInterval сохраните в свойстве идентификатора текущего таймера.
    }
    checkClock(alarm){
        // если текущее время совпадает со временем звонка, то вызывайте колбек.
        if (this.getCurrentFormattedTime() == alarm.time) {
            alarm.callback();

            this.alarmCollection.splice(this.alarmCollection.indexOf(alarm), 1);

            if (this.alarmCollection.length === 0)
                clearInterval(this.timerId);
        }
        console.log(this.timerId);
    }

    stop() { // - останавливает выполнение всех звонков
        // Сделайте проверку существования идентификатора текущего таймера.
        if (!this.timerId == null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
        this.timerId = null;
        // Если у идентификатора текущего таймера есть значение, то вызовите функцию clearInterval для удаления 
        // интервала, а так же удалите значение из свойства идентификатора текущего таймера.
    }

    printAlarms() {
        // С помощью метода forEach выведите информацию о каждом звонке (id и time).
        this.alarmCollection.forEach(alarm => console.log(alarm.id, alarm.time))
    }

    clearAlarms() {
        // Вызывает метод остановки интервала.
        this.stop()
        // Удаляет все звонки.
        this.alarmCollection = [];
    }
}

// Создайте объект класса AlarmClock.
let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("8:36", () => console.log("Пора вставать"), 1);
phoneAlarm.addClock("8:37", () => console.log("Пора 30 вставать"), 2);
// phoneAlarm.start();
// phoneAlarm.printAlarms()
console.log(phoneAlarm.getCurrentFormattedTime());

// const checkDelay = (index, delay) => {
//     const start = new Date();
    // let t = setInterval( () => {
    //     const end = new Date();
    //     const realDelay = end - start;
    //     console.log(`${index}: Задержка: ${realDelay} мс`);
    //     if (realDelay > 1000)
    //     clearInterval(t)
    // }, delay)
// }

// for (let i = 0; i < 10; i++)
//     checkDelay(1, 1)