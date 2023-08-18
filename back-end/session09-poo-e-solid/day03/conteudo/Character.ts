abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
  private static characterPresentation(char: Character): void {
    char.talk();
    char.specialMove();
  };
}

class MeleeCharacter extends Character {
  talk(): void {console.log('Chegue perto pa tu ve!');};
  specialMove(): void {console.log('Ataque curto!')};
}

class LongRangeCharacter extends Character {
  talk(): void {console.log('Se afasta pvt!')};
  specialMove(): void {console.log('Ataque longo!')}
}

const Yoshi = new MeleeCharacter();
const Samus = new LongRangeCharacter();

Yoshi.specialMove();
Yoshi.talk();
Samus.specialMove();
Samus.talk();