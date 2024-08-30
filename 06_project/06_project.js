let start = document.querySelector("#start")
let stop = document.querySelector("#stop")


const randome = function() {
    let colorArr = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += colorArr[Math.floor(Math.random() * 16 )]
    }
    return hex;
}

let invalid;
const startColoring = function() {
    if (!invalid) {
        invalid = setInterval(bg, 2000)
}
        function bg () {
            document.body.style.backgroundColor = randome()
            console.log(randome(),document.body.style.backgroundColor)
    }
};
const stopColoring = function () {
    clearInterval(invalid);
    invalid = null;
};
start.addEventListener("click", startColoring)
stop.addEventListener("click", stopColoring)