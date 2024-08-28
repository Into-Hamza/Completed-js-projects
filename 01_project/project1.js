const bg = document.querySelector("body")
const boxes = document.querySelectorAll(".button")
const names = boxes.forEach((e)=>{
        e.addEventListener("click",(e)=>{
            if (e.target.id === "white") {
                const black = bg.style.backgroundColor = "black"
                console.log(`clicked on ${e.target.id} color`);
                
                
            }
            if (e.target.id === "yellow") {
                bg.style.backgroundColor = "yellow"
                console.log(`clicked on ${e.target.id} color`);
            }
            if (e.target.id === "blue") {
                bg.style.backgroundColor = "blue"
                console.log(`clicked on ${e.target.id} color`);
            }
            if (e.target.id === "grey") {
                bg.style.backgroundColor = "grey"
                console.log(`clicked on ${e.target.id} color`);
            }
        })
    
    
})


// function click (e){
//     console.log("clicked")
//     console.log(boxes[0].id);
    
    // e.addEventListener("click", (num)=>{
    //     bg.style.backgroundColor = "red";
    // })
    // bg.style.backgroundColor = "red";
// }