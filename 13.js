// console.log(Object.getOwnPropertyDescriptor())

// console.log(Object.getOwnPropertyDescriptor(Math.PI))


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")


console.log(descriptor)


const obj = Object.create(null)

Object.create(null)
Object.create({ ground: "MCG" })
Object.create(null)
Object.create(null)
Object.create(null)
Object.create(null)
Object.create(null)
Object.create(null)
Object.create(null)


const chai = {
    name: "Tapal",
    age: 20,
    HouseNo: "39/b",


    orderChai: function () {
        console.log(
            "Good"
        )
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))


Object.defineProperty(chai, "name", {
    writable: false,

})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))


for (let [key, value] of Object.entries(chai)) {
    if (value != 'function') {
        console.log(`${key},${value}`)
    }

}

// class MyPilot{


//     function dav(){
//         if(true){
//             return Math.PI?.true || "Not False"
//             [0].some((fields) => {
//                 fields?.true || false
//             })
//         }
//     }


//     static createPilot(){
//         return '1343'
//     }
// }