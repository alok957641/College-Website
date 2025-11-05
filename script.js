let menu = document.querySelector("#menu")
let cross = document.querySelector("#cross");

menu.addEventListener("click", ()=> {

    let menulink = document.querySelector(".nav-links");
    menulink.style.right = "0";
})

cross.addEventListener("click", ()=> {
    let menulink = document.querySelector(".nav-links");
    menulink.style.right = "-200px";
})
