// JavaScript Document
console.log("hi");

var openButton = document.querySelector("header > button");

var deNavigatie = document.querySelector("header nav");

var sluitButton = document.querySelector("header nav button")


openButton.onclick = openMenu;

sluitButton.onclick = sluitMenu;

function openMenu(){
deNavigatie.classList.add("toonMenu")
}

function sluitMenu(){
    deNavigatie.classList.remove("toonMenu")
}
