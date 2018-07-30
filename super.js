class Animal {
    constructor(name) {
        this.name = name;
    }

    tellMeAboutYourself() {
        console.log('My name is ' + this.name);
        console.log(this.whatDoesTheAnimalSay());
    }

}

class Dog extends Animal {
    whatDoesTheAnimalSay() {
        return 'I go woof';
    }

    tellMeAboutYourself() {
        super.tellMeAboutYourself();
        console.log('I am a good boy');
    }
}

class Cat extends Animal {
    whatDoesTheAnimalSay() {
        return 'I go meow';
    }
}

class Kitty extends Cat {
    whatDoesTheAnimalSay() {
        return 'I go meow meow meow';
    }
}


const myAnimal = new Dog('Mooney');
const anotherAnimal = new Cat('Barry');
const lastAnimal = new Kitty('Lindy');

myAnimal.tellMeAboutYourself();
anotherAnimal.tellMeAboutYourself();
lastAnimal.tellMeAboutYourself();