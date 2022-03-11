const maguinhoLixera = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const Yorick = {
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

const battleMembers = { maguinhoLixera, Yorick, dragon };

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const dragonDmg = Math.floor(
    Math.random() * (dragon.strength - minDmg + 1) + minDmg
  );
  return dragonDmg;
};

const warriorAttack = (Yorick) => {
  const minDmg = Yorick.strength;
  const maxDmg = minDmg * Yorick.weaponDmg;
  const warriorDamage = Math.floor(
    Math.random() * (maxDmg - minDmg + 1) + minDmg
  );
  return warriorDamage;
};

const mageAttack = (maguinhoLixera) => {
  const mageMana = maguinhoLixera.mana;
  const minDmg = maguinhoLixera.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: "Not enough mana...",
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor(
      Math.random() * (maxDmg - minDmg + 1) + minDmg
    );
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(Yorick);
    Yorick.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(maguinhoLixera);
    const mageDamage = mageTurnStats.damageDealt;
    maguinhoLixera.damage = mageDamage;
    maguinhoLixera.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    maguinhoLixera.healthPoints -= dragonDamage;
    Yorick.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());
