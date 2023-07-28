

let body = document.getElementsByName("body");
let div = document.querySelector(".btn");
let btn = document.createElement("button");
btn.innerHTML = "<h2>Strawberry Milk Matcha!</h2>";
btn.style.backgroundColor = "pink"
div.appendChild(btn);

function strike(element) {
    if (element.innerHTML.slice(0,3) == "<s>") {
        element.innerHTML = element.innerHTML.slice(3, element.innerHTML.length - 4);
    }
    else {
        element.innerHTML = "<s>" + element.textContent + "</s>" ;
    }
};


