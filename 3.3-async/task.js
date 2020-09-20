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
        // Если значение идентификатора текущего таймера отсутствует, то создайте новый интервал.
        // Результат функции setInterval сохраните в свойство "идентификатор текущего таймера".
        if (this.timerId === null)
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach( (value) => this.checkClock(value) )
            }, 1000);
    }

    checkClock(alarm){
        // если текущее время совпадает со временем звонка, то вызывайте колбек.
        if (this.getCurrentFormattedTime() == alarm.time) {
            alarm.callback();
            console.log(this.timerId);

        if (this.alarmCollection.length === 0)
            clearInterval(this.timerId);
        }
    }

    stop() { // - останавливает выполнение всех звонков
        // Сделайте проверку существования идентификатора текущего таймера.
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
        // Если у идентификатора текущего таймера есть значение, то вызовите функцию clearInterval для удаления 
        // интервала, а так же удалите значение из свойства "идентификатор текущего таймера".
    }

    printAlarms() {
        // С помощью метода forEach выведите информацию о каждом звонке (id и time).
        console.log(`Печать будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(alarm => {
            console.log(`Будильник №${alarm.id}, заведен на ${alarm.time}`)
        })
    }

    clearAlarms() {
        // Вызывает метод остановки интервала.
        this.stop()
        // Удаляет все звонки.
        this.alarmCollection = [];
    }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("06:56", () => console.log("Пора вставать"), 1);

phoneAlarm.addClock("06:57", () => {
    console.log("Пора 2 вставать");
    phoneAlarm.removeClock(2)
}, 2);

phoneAlarm.addClock("06:58", () => {
    console.log("Пора 3 вставать");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);

phoneAlarm.start();
// phoneAlarm.printAlarms()
// console.log(phoneAlarm.getCurrentFormattedTime());