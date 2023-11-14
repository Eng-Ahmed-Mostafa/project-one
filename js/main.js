
let iconList = document.querySelector(".header .lists");
let listLinks = document.querySelector(".header .links");
iconList.addEventListener('click',() => {
    iconList.classList.toggle("distance");
    listLinks.classList.toggle("show");
});
let linkMenu = document.querySelector(".header .links .parent > a");
let menu = document.querySelector(".header .links .parent .menu");
linkMenu.addEventListener('click',function() {
    menu.classList.toggle('display')
})
let linkMenuMenu = document.querySelector(".header .links .inside > a");
let menuMenu = document.querySelector(".header .links .menu .menu-menu");
linkMenuMenu.onclick = () => {
    menuMenu.classList.toggle("display");
}
let linkActive = document.querySelectorAll(".header .links > li > a");


window.onload = function() {
    checkStorage();
}



function theChecker() {
    removeAndAddActive();
}
function removeAndAddActive() {
    // Remove From All Items
    linkActive.forEach((element,index) => {
        element.classList.remove("active");
        element.onclick = function() {
            element.classList.add("active");
            contentStorage(index);
            console.log(index)
        }
    });
}
function contentStorage(index) {
    let linkMoveIndex = window.localStorage.setItem("links-active",index);
    checkStorage();
}
function checkStorage(index) {
    linkActive[parseInt(localStorage.getItem("links-active"))].classList.add("active");
    console.log(parseInt(localStorage.getItem("links-active")))
}
theChecker();