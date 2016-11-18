export class Animal {

  constructor ( sound = 'generic sound' ) {
    this.sound = sound;
  }

  speak() {
    return this.sound;
  } 
 }

export class Reptile extends Animal {

  constructor ( SOUND = 'reptiles sound' ) {
    super(SOUND);
  }

}

export class Primate extends Animal {
}

export class Human extends Primate {
  constructor () {
    super ( 'hello'  );
  }

}
