// const butSelected = document.querySelectorAll('.button')


// // console.log(butSelected);


// const bodySelected = document.querySelector("body")
// // console.log(bodySelected)


// butSelected.forEach((button) => {
//     console.log(button)
//     button.addEventListener('click', (e) => {
//         // console.log(e)
//         console.log(e.target)
//         switch (e.target.id) {
//             case "grey":
//                 // bodySelected.style.backgroundColor = "Grey"
//                 bodySelected.style.backgroundColor = e.target.id
//                 break;
//             case "white":
//                 // bodySelected.style.backgroundColor = "White"
//                 bodySelected.style.backgroundColor = e.target.id
//                 break;
//             case "blue":
//                 // bodySelected.style.backgroundColor = "Blue"
//                 bodySelected.style.backgroundColor = e.target.id
//                 break;
//             case "yellow":
//                 // bodySelected.style.backgroundColor = "Yellow"
//                 bodySelected.style.backgroundColor = e.target.id
//                 break;
//             case "pink":
//                 // bodySelected.style.backgroundColor = "Yellow"
//                 bodySelected.style.backgroundColor = e.target.id
//                 break;
//             case "purple":
//                 // bodySelected.style.backgroundColor = "Yellow"
//                 bodySelected.style.backgroundColor = e.target.id
//                 break;
//             case "orange":
//                 // bodySelected.style.backgroundColor = "Yellow"
//                 bodySelected.style.backgroundColor = e.target.id
//                 break;
//             case "green":
//                 // bodySelected.style.backgroundColor = "Yellow"
//                 bodySelected.style.backgroundColor = e.target.id
//                 break;
//             case "red":
//                 // bodySelected.style.backgroundColor = "Yellow"
//                 bodySelected.style.backgroundColor = e.target.id
//                 break;
//             case "black":
//                 // bodySelected.style.backgroundColor = "Yellow"
//                 bodySelected.style.backgroundColor = e.target.id
//                 break;
//             default:
//                 alert("Wrong selections")
//         }
//     })
// })




// Remember the steps

const btnSelect = document.querySelectorAll('.button');
console.log(btnSelect)


const bodySelect = document.querySelector("body")
console.log(bodySelect)




btnSelect.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.id)

        switch (e.target.id) {
            case "grey":
                bodySelect.style.backgroundColor = e.target.id
                break;
            case "white":
                bodySelect.style.backgroundColor = e.target.id
                break;
            case "blue":
                bodySelect.style.backgroundColor = e.target.id
                break;
            case "yellow":
                bodySelect.style.backgroundColor = e.target.id
                break;
            case "pink":
                bodySelect.style.backgroundColor = e.target.id
                break;
            case "purple":
                bodySelect.style.backgroundColor = e.target.id
                break;
            case "orange":
                bodySelect.style.backgroundColor = e.target.id
                break;
            case "green":
                bodySelect.style.backgroundColor = e.target.id
                break;
            case "black":
                bodySelect.style.backgroundColor = e.target.id
                break;
            case "red":
                bodySelect.style.backgroundColor = e.target.id
                break;
            default:
                alert("Wrong Selection");
        }
    })
})




