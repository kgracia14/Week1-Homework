let hero= { 
    name: "Coder Man",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: { 
        type: 'explosive keyboard',
        damage: 2
     }
};


function rest(hero) {
    hero.health= 10;
    return hero
}


let dagger= { type: 'dagger', damage: 2 }

function pickUpItem(hero, object) {
    hero.inventory.push(object)
    object= dagger
    return hero
    
}

console.log(hero.inventory);




function equipWeapon(x) {
    hero.weapon= hero.inventory[0]
    return hero
}


