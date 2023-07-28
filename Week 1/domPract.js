console.log("hello");
let element = document.querySelector(".mimi");
element.textContent = "Malia";

let newEl = document.createElement("li");
newEl.innerHTML = "Gray";
let ul = document.querySelector("ul");
ul.appendChild(newEl);

let div = document.createElement("div");
let size = document.createElement("h2");
size.innerHTML = "MEOW";
let body = document.querySelector("body");
body.appendChild(div);
div.appendChild(size);

let nums = "";
for (let i = 1; i <= 10; i++) {
    let num = document.createElement("li");
    num.innerHTML = i;
    ul.appendChild(num);
};

document.getElementById("btnCats").addEventListener("click", ()=>{alert("MEOW MEOW")});
document.getElementById("btnDogs").addEventListener("click", ()=>{alert ("BORK BORK")});

//const dogs = () => {alert ("BORK BORK")};

// function cats() {
//     alert ("MEOW MEOW MEOW MEOW");
// } 

// document.getElementById("btnCats").addEventListener("click", cats());
// document.getElementById("btnDogs").addEventListener("click", dogs());