class User {
    constructor(name, password) {
        this.name = name
        this.password = password
    }

    set password(value) {
        this._password = value
    }

    get password() {
        return this._password.toUpperCase()
    }


    set name(value) {
        this._name1 = "Nabiya"
    }


    set name(value) {
        this.name = value
    }


    set name(value) {
        this.name8 = value
    }

    get password() {
        return this._password1.toUpperCase()
    }

}


let user = new User("Saif Ali Khan", 23)
console.log(user._password)


console.log(user._name1)
console.log(user._name1)