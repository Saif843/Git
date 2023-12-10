const tinderUser = {}

tinderUser.name = "Saif"
tinderUser.email = "saifworld396@gmail.com"

console.log(tinderUser)




const regularUser = {
    email: "saifworld396@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Saif",
            lastName: "Ali"
        }
    }
}


console.log(regularUser.fullname.userfullname.firstname)





const obj1 = { 1: "a", 2: "b" }



const obj3 = { ...obj1, ...regularUser }

console.log(obj3)


const myArr = [
    {
        name: "Saif",
    },
    {
        name: "Ali",
    }
    ,
    {
        name: "Khan",
    }
]


console.log(myArr[2].name)


console.log(myArr[1].hasOwnProperty('name'))




// const { courseInstructor: instruct } = course

// {

//     [],
//         {},
//         [],
//         {},
// }


// [

//     {},
//     {},
//     {},
//     // ......
// ]





// console.log(instruct)