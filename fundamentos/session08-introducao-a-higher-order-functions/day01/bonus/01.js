const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomNumber = (min, max) => {
  const mini = Math.ceil(min);
  const maxi = Math.floor(max);
  return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
};

const fShowDamage = (obj, min, max) => obj.damage = randomNumber(min, max);

const fManaSpend = (obj) => obj.mana > 15 ? obj.mana - 15 : 'Não possui mana suficiente';

const fShowDamageMage = (obj, min, max) => {
  return {
    damage: fShowDamage(obj, min, max),
    mana: fManaSpend(obj),
  };
};

const gameActions = {
  // Crie as HOFs neste objeto.
  turnWarrior: (fpShowDamage) => {
    const damage = fpShowDamage(warrior, warrior.strength, warrior.strength * warrior.weaponDmg);
    return damage;
  },
  turnMage: (fpShowDamageMage) => {
    const damage = fpShowDamageMage(mage, mage.intelligence, mage.intelligence * 2);
    return damage;
  },
  turnDragon: (fpShowDamage) => {
    const damage = fpShowDamage(dragon, 15, dragon.strength);
    return damage;
  },
  battle: () => {
    const damageWarrior = gameActions.turnWarrior(fShowDamage)
    dragon.healthPoints -= damageWarrior;
    warrior.damage = damageWarrior;

    const magePlay = gameActions.turnMage(fShowDamageMage);
    const damageMage = magePlay.damage;
    const manaSpend = magePlay.mana;
    dragon.healthPoints -= damageMage;
    mage.damage = magePlay.damage;
    mage.mana = manaSpend;

    const damageDragon = gameActions.turnDragon(fShowDamage);
    warrior.healthPoints -= damageDragon;
    mage.healthPoints -= damageDragon;
    dragon.damage = damageDragon;

    return battleMembers;
  }
};

console.log(gameActions.battle());

// test reduce
const arr = [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
console.log(arr.reduce((acc, val) => acc + val));