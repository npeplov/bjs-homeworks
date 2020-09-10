// Класс оружия
class Weapon {
	constructor(name = 'weapon', attack = 3, durability = 3, range = 1) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.initDurability = durability;
		this.range = range;
	};

	takeDamage(damage) {
		this.durability-=damage;

		if(this.durability <= 0){
			this.durability = 0;
		}
	};

	getDamage() {
		if(this.durability <= (this.initDurability/this.durability) * 30) {
			return this.attack / 2;
		} else if(this.durability <= 0) {
			return 0;
		} else {
			return this.attack;
		}
	};

	isBroken() {
		return !(this.durability > 0);
	};
}


// Классы основных оружий
class Arm extends Weapon {
	constructor() {
		super('Рука', 1, Infinity, 1);
	}
}

class Bow extends Weapon {
	constructor() {
		super('Лук', 10, 200, 3);
	}
}

class Sword extends Weapon {
	constructor() {
		super('Меч', 25, 500, 1);
	}
}

class Knife extends Weapon {
	constructor() {
		super('Нож', 5, 300, 1);
	}
}

class Staff extends Weapon {
	constructor() {
		super('Посох', 8, 300, 2);
	}
}

// Классы улучшенных оружий

class LongBow extends Bow {
	constructor() {
		super();

		this.name = 'Длинный лук';
		this.attack = 15;
		this.range = 4;
	}
}

class Axe extends Sword {
	constructor() {
		super();

		this.name = 'Секира';
		this.attack = 27;
		this.durability = 800
		this.initDurability = 800
	}
}

class StormStaff extends Staff {
	constructor() {
		super();

		this.name = 'Посох Бури';
		this.attack = 10;
		this.range = 3;
	}
}

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() { // возвращать имена всех оружий
    return weapons.map(weapon => weapon.name);
}

// возвращает количество оружий больше принимаемой прочности
function getCountReliableWeapons(durability) { 
    return weapons.filter(weapon => weapon.durability > durability).length;
}

// возвращает вердикт: есть ли оружия прочней принимаемой прочности?
function hasReliableWeapons(durability) {
    return !(weapons.filter(weapon => weapon.durability > durability)[0] === undefined);
}

// имена оружий, которые прочней полученного значения.
function getReliableWeaponsNames(durability) { 
    return weapons
    .filter(weapon => weapon.durability > durability)
    .map(weapon => weapon.name);
}

function getTotalDamage() { // общую сумму урона всех оружий
    return weapons.reduce( (acc, weapon) => {
        return acc + weapon.attack;
    }, 0);
}