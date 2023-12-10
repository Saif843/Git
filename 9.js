class car{
    constructor(){
        
    }
}


// Beautiful and more readable code

let counter = (function(){
    // Private variable
    let count = 0

    function increment(){
        count++
    }

    return {
        getCount:function(){
            return count
        },
        incrementCounter:function(){
            increment()
        }
    };
})()

console.log(counter.incrementCounter())
console.log(counter.incrementCounter())
console.log(counter.incrementCounter())
console.log(counter.incrementCounter())
console.log(counter.getCount())