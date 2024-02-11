const form = document.querySelector("form")
// console.log(form);
const result = document.querySelector("#result")
// console.log(result);

form.addEventListener("submit", (e) => {

    e.preventDefault()

    const weight = Number(document.querySelector("#weight").value)
    // console.log(weight);

    const height = Number(document.querySelector("#height").value)
    // console.log(height);

    if (weight == "" || weight < 0 || isNaN(weight)) {
        // console.log("enter valid weight");
        result.innerHTML = `Enter the valid weight ${weight}`
    } else if (height == "" || height < 0 || isNaN(height)) {
        // console.log("enter valid height");
        result.innerHTML = `Enter the valid height ${height}`
    } else {
        let bmiResult = (weight / (height * height)).toFixed(1)
        // console.log(bmiResult);
        

        if (bmiResult < 18.6) {
            result.innerHTML = `your BMI is calculation is =  ${bmiResult} and you are comes in Under Weight`
        } else if (bmiResult > 18.6 && bmiResult < 24.9) {
            result.innerHTML = `your BMI is calculation is =  ${bmiResult} and you are comes in Normal Weight`
        } else {
            result.innerHTML = `your BMI is calculation is =  ${bmiResult} and you are comes in Over Weight`
        }
    }

    

})

