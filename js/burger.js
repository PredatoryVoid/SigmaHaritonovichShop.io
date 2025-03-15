const menu = document.querySelector(".menu__list");
const burger = document.querySelector(".burger");
const menuItems = document.querySelectorAll(".menu__item");
function burgerClick(){
    menu.classList.toggle("menu__list__activate");
    burger.classList.toggle("active");
    menuItems.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = '';
        }
    else{
        link.style.animation = `menuAnimation 1.5s ease forwards ${index/7 + 0.3}s`;
    }
    })
}