"use strict"
document.addEventListener('DOMContentLoaded',() => {
let promo = document.querySelector('.promo'), 
menu = document.querySelector('.nav-m'), 
overlay = document.querySelector('.overlay');
/* console.log(menu);
console.log(overlay); */
    promo.addEventListener('click', (Even) => {
        if(Even.target.classList.contains('gamburger')||Even.target.classList.contains('gamburger__item')||Even.target.classList.contains('menu-close__img')) {
            menu.classList.toggle('off');
            overlay.classList.toggle('activ');
            if(menu.classList.contains('off'))  document.body.style.overflow = ""
                else document.body.style.overflow = "hidden";
            console.log('menu.classList');
            console.dir(menu.classList);
            
        };     
    });


})