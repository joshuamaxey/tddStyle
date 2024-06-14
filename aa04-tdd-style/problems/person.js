class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // INSTANCE METHODS
    sayHello() {
        return `Hello, my name is ${this.name}`;
    }

    visit(otherPerson) {
        return `${this.name} visited ${otherPerson.name}`;
    }

    update(obj) {
        if(typeof obj !== 'object') {
            throw new TypeError('');
        } else {
            if(Array.isArray(obj)) {
                throw new TypeError('');
            }
        }


    }

    // STATIC METHODS
    static greetAll(objArray) {

    }
}

module.exports = Person;
