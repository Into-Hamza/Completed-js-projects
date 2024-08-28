let time = document.querySelector("#clock")

setInterval(function (){
    let data = new Date()
    time.innerHTML = data.toLocaleString()
},1000)