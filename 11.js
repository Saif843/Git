function animal(){
    console.log("Animal...")
}


animal.prototype.sayhi = function() {
    return `Resepect...`
}


function Dog(name,breed){
    this.name(this,name)
    this.breed = breed
}


Dog.prototype = Object.create(animal.prototype)