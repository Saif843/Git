function add(number1,number2){
    if(!number1 || !number2){
        console.log(`${number1} and ${number2} both are undefined`)
        return
    }
    if(number1 || number2){
        return `You have passed away`
    }

    return number1 + number2
}


function apiConnected(){
    return 
}

// refrenced apiConnected
// () executed function modularity and generalality functionality/features designings
console.log(add(2,90))


// business logics


// const {agli:icecream} = brands



function obj(anyObj){
    console.log(`${anyObj.userName} and ${anyObj.password}`)
}

const user = {
    userName : "Saif Ali Khan",
    password : 2344
}

obj(user)





