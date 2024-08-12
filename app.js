let warriorValue = document.getElementById("weaponValue").value;

let katana = 15;
let gun = 40;
let pistol = 35;
let fireArm = 25;
let knife = 15;
let superFeet = 10;
let bow = 20;
let javelin = 30;

let weapons = [katana, gun, pistol, fireArm, knife, superFeet,
    bow, javelin];

function Warrior(name, damage, heal) {
    this.name = name;
    this.damage = damage;
    this.heal = heal;
}
let result = 0;
let heal = 100;
let result2 = 0;
let heal2 = 100;

fight = () => {
    let warriorName = document.getElementById('warriorName').value;

    let randomNum = Math.floor(Math.random() * 7);
    let randomNum2 = Math.floor(Math.random() * 7);

    let weapon = weapons[randomNum];  // user's weapon
    let weapon2 = weapons[randomNum2];  // computer's weapon

    let userWarrior = new Warrior(warriorName, 10 + weapon, heal); // user's character
    let computerWarrior = new Warrior('Iron Man', 10 + weapon2, heal2); // computer's character

    heal -= userWarrior.damage;
    result = heal;
    heal2 -= computerWarrior.damage;
    result2 = heal2;

    if (result === 0 || result < 0)
        document.write(userWarrior.name + ' lose!' + userWarrior.name + 'have left ' + result + ' power');
    else if (result2 === 0 || result2 < 0)
        document.write('coputer lose! computer has left ' + result2 + ' power');
    else if (result2 !== 0 || result2 > 0)
        console.log(result2);
    else if (result !== 0 || result > 0) {
        console.log(result);
    }
    else {
        console.log('something went wrong');
    }

    console.log('user`s left power ' + result);
    console.log('computer`s left power ' + result2);
    console.log('user has ' + weapon + ' power');
    console.log('computer has ' + weapon2 + 'power');
}


