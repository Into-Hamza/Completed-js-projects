const submit = document.querySelector("#form")
const height = document.querySelector("#height")
const weight = document.querySelector("#weight")
const results = document.querySelector("#results")

let p = document.createElement('p')
let small = document.createElement('small')


submit.addEventListener("submit",(e)=>{
        e.preventDefault()
    const userHeight = parseInt(height.value)
    const userWeight = parseInt(weight.value)
    console.log(userHeight)
    console.log(userWeight)
    checking(userHeight, userWeight)
})
function checking (height, weight){
    // if (isNaN(height) || isNaN(weight)) {
    //     const msg = `height or weight is not a valid number ${height} ${weight}`
    //     p.innerHTML = `${msg}`
    // }
    if (height === '' || height < 0 || isNaN(height)) {
            const msg = `height is not a valid number ${height}`
            p.innerHTML = `${msg}`
        }else if(weight === '' || weight < 0 || isNaN(weight)){
            
            const msg = `weight is not a valid number ${weight}`
            p.innerHTML = `${msg}`
        }else{
        const msg = Math.floor(((weight / height / height) * 10000))
        p.innerHTML = ` your BMI weight is ${msg}`
        message(msg);
    }
}


function message(msg){
    if (msg<18) {
        small.innerHTML = 'you are underweight'
    }
    else if (msg>18 && msg<=25) {
        small.innerHTML = 'you are Healthy'
    }
    else {
        small.innerHTML = 'you are overweight'
    }
    results.appendChild(p)
    results.appendChild(small)
}
