// const chai = require('chai')
const { chai, expect } = require('chai')

const Person = require('../problems/person');

describe('Person class', function() {
    //before each


    it('should create successfully', function() {
        let person = new Person();
        expect(person).to.exist;
    });

    it('should set name and age properties on creation', function() {
        let person = new Person("Robert", 40)
        expect(person.name).to.equal("Robert")
        expect(person.age).to.equal(40);
    })

    it("sayHello() should return a string of the person's name and a greeting message", function() {
        let person = new Person("Joshua", 30)
        expect(person.sayHello()).to.equal("Hello, my name is Joshua")
    })

    it("visit(otherPerson) should return a string stating that person1 visited person2", function() {
        let person1 = new Person("Robert", 40);
        let person2 = new Person("Joshua", 30);
        expect(person1.visit(person2)).to.equal("Robert visited Joshua")
    });

    it("update(obj) should throw a TypeError if obj is not an object", function() {
        let person1 = new Person("Robert", 40)
        let number = 50
        let string = "Joshua"
        let boolean = false
        let array = [1,2,3];
        expect(() => person1.update(number)).to.throw(TypeError);
        expect(() => person1.update(string)).to.throw(TypeError);
        expect(() => person1.update(boolean)).to.throw(TypeError);
        expect(() => person1.update(array)).to.throw(TypeError);
    });

    it("update(obj) should throw a TypeError if obj does not have .name and .age properties", function() {
        let person1 = new Person("Robert", 40)
        let blank = new Person();
        let blank1 = new Person("Joshua")
        let blank2 = new Person("", 30)

        expect(() => person1.update(blank)).to.throw(TypeError)
        expect(() => person1.update(blank1)).to.throw(TypeError)
        expect(() => person1.update(blank2)).to.throw(TypeError)
    })

    it("update(obj) should update person's name and age properties with correct obj properties", function() {
        let person1 = new Person("Robert", 40)
        let person2 = new Person("Joshua", 30)

        expect(person1.update(person2)).to.equal(person2);
    })
})
