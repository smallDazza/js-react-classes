class Dog {
    constructor(name, breed, age, color){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
        Dog.#numberOfDogs++;
    }
    static #numberOfDogs = 0;

    static resetDogCount(){
        Dog.#numberOfDogs = 0;
    }

    // static set numberOfDogs(newValue){
    //     return Dog.#numberOfDogs++;
    // }

    bark(){
        // console.log(`Woof!! I am ${this.name}.`);
        throw new BarkError(this.name, this.breed);
    }
    
}

let millie = new Dog("Millie", "Spoodle", "3", "Grey/White");

// console.log(millie.bark());

// create unique BarkError class by inheriting from Error class
class BarkError extends Error {
    constructor(dogName, dogBreed){
        // super() is called to use the Error class's properties/methods
        super(`${dogName} of breed ${dogBreed} failed to bark.`);
    }
}

try{
    millie.bark();
} catch (error) {
    // throw new BarkError(millie.name, millie.breed);
    if (BarkError){
        console.log("Bark error occured.");
    }
}
Dog.numberOfDogs = 10;
console.log(Dog.numberOfDogs)