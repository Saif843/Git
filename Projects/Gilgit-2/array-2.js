const mySym = Symbol("Key-1")


// const Jsuser = {
//     "Name" : "Saif Ali Khan",
//     [mySym] : "ret",
//     group:{
//         "name":{
//             "group-alpha",
//             "group-beta",
//         },
//     }
// }

// Some syntax problems

// Jsuser.email

// Jsuser.["age"]


Object.freeze(Jsuser)


Jsuser.email = function() {
    console.log("Entry form is working or not")
}



console.log(`Dynamic Value is coming from ${values}`)




