
let boxContainer = document.querySelector(".boxContainer")

let btn = document.querySelector(".btn")


btn.addEventListener("click", ()=>{
    let userAnswer = prompt("Squares per side?");

    let uASq = userAnswer * userAnswer;
    if (userAnswer >= 0){
        while (boxContainer.firstChild) {
            boxContainer.removeChild(boxContainer.firstChild);
        }
        
        for (let i = 0; i >= uASq; i++){
            let boX =  document.createElement("div");

            boX.style.width = "50px";
            boX.style.height = "50px";
            boX.style.backgroundColor = "black";
            boX.classList.add("boxes")
            boxContainer.appendChild(boX)

            boX.addEventListener("mouseover", ()=>{
                boX.style.backgroundColor = "white";
            });
        }
    }

})

for(let i = 0; i <= 255; i++){
let boX =  document.createElement("div");

boX.style.width = "50px";
boX.style.height = "50px";
boX.style.backgroundColor = "black";
boX.classList.add("boxes")
boxContainer.appendChild(boX)

boX.addEventListener("mouseover", ()=>{
    boX.style.backgroundColor = "white";
});

}