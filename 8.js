// Constructor functions 

function bioData(name, age) {

    // Private variables
    let _name = name
    let _age = age

    // Public Methods
    this.getAge = function () {
        return _age
    }

    this.getName = function () {
        return _name
    }


    this.sayHello = function () {
        console.log(`We have ${this._name} with the ${this._age} years of age`)
    }
}


let person = new bioData()
let person1 = new bioData()
let person2 = new bioData("Saif ki Ami",22)
let person3 = new bioData()



person._name = "Saif Ali Khan"
person._age = 23

person1._name = "Ahmad Ali Khan"
person1._age = 23

person2._name = "Hina Ahmad"
person2._age = 23


person3._name = "Tehreem Ahmad"
person3._age = 23

console.log(person2)
person2.sayHello()

