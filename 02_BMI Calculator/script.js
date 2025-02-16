const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)  
// agr ise yaha likh denge to ye empty value dega

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)  //int me convert ho jayegi value
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)) {  // NaN - not a number
        results.value = `Please give a valid height :${height} is invalid`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {  // NaN - not a number
        results.value = `Please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height * weight)/10000)).toFixed(2)
        //show the results
        results.innerHTML = `<span>${bmi}</span>`;
        results.value = bmi; // Display BMI in the textbox
        results.style.color = "black"; 
    }
});