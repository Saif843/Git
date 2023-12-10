let score = 1;


console.log(score++)

console.log(Math.floor((Math.random() * 10) + 1))


// Math.random() (max - min + 1)

const max = 80
const min = 40

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

let myDate = new Date()
console.log(myDate.toJSON)
console.log(typeof myDate)


// myDate.toLocaleString('default',{

// })


const mySam = Symbol("mykey")


const samUser = {
    [mySam]: "mysaif",
    name: "Saif"
}

console.log(typeof samUser[mySam])

console.log(samUser)



samUser.greeting = function(){
    console.log(
        `${this}`
    )


}



const obj1 = {1:"Saif",2:"Ali"}
const obj2 = {3:"Ahmad",4:"Ali"}

const newObj = Object.assign({},obj1,obj2)

console.log(newObj)


console.log(Object.values(obj1))

console.log(Object.entries(obj1))

// Significant amoungt of logic building is required


// for the sake of simplcity 

// data entry points
// I am looking for the responses



// Data value not exisitn 

// and you have appklied loop 

// on it


// which causes the chances of the app crashed

// Please try not to put stress on the machines
// console.log(obj1.hasOwnValue('Saif'))

// ...spreads



// const newObj = {...obj1,...obj2}


// For the values coming from teh database

// biasness which will be 

// the very important and key factor 
// of the algorithms



// const user = [
//     {},
//     {},
//     {},
//     {},
//     {},
//     {}
// ]


// user[1].


// Syntax 

// not always conditikon and loops

// Some buil-in thingss also available

// Values are coming from the database ?. for safe/security checks



// refrenced and running at the same typed



console.log(samUser.greeting())
// {specific-vaues}
// object: key array, or value array


// -()

// object

// Symbol
// let samUser.greeting = () => {
//     console
// }


// Differetn methods
// that must be applied in different use-cases
// You have to think on the go which method to apply

// applied first

// synatx needed
// directly or indirectly
// collapsable
// hackathon

// think like a problen 