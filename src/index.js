import("./index.css");
import imager from "./logo.png";

function create(p){
    return document.createElement(p)
}

function get(p){ return document.getElementById(p)}

get("form").addEventListener("submit", (p)=>{
    e.preventDefault();

    let x = get("note").value;
    get("output").innerHTML = x;
})

let img = create("img");
img.src = image;
get("header").appendChild(img);

const h1 = create("h1");
h1.innerText = "Notes App";
h1.classList.add("greeting");
get("header").appendChild(h1);