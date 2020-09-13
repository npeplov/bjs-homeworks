console.clear

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
    return weapons.some(weapon => weapon.durability > durability);
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