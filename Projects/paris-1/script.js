const forms = document.querySelector('form')




function valid(width) {
    const widthConv = parseFloat(width);
    if (widthConv < 18.6) {
        console.log('Under');
    } else if (widthConv >= 18.6 && widthConv <= 24.9) {
        console.log('Normal');
    } else if (widthConv > 24.9) {
        console.log('Overweight');
    } else {
        console.log('Wrong Selection');
    }
}

forms.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const width = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')




    if (height === ' ' || height < 0 || isNaN(height)) {
        result.innerHTML = `Give right height`;
    } else if (width === ' ' || width < 0 || isNaN(width)) {
        result.innerHTML = `Give right width`
    } else {
        const bmi = (width / ((height * height) / 10000)).toFixed(2)

        result.innerHTML = `<span>${bmi}</span>`

        valid(width)


    }



});