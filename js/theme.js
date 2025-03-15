let header = document.querySelector('.body');
let text = document.querySelector('.product')
let navLinks = document.querySelectorAll(".menu_item");
function themeDark(){
    header.style.background = 'black';
    text.style.color = "white";
    navLinks.forEach((el) => {
        el.style.color = "white";
    })
}
function themeWhite(){
    header.style.background = 'white';
    text.style.color = "black";
    navLinks.forEach((el) => {
        el.style.color = "black";
    })
}