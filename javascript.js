
let boxContainer = document.querySelector(".boxContainer")


for(let i = 0; i <= 16; i++){
let boX =  document.createElement("div")
boX.style.width = "50px";
boX.style.height = "50px";
boX.style.backgroundColor = "black";
boX.classList.add("boxes")
boxContainer.appendChild(boX)

}