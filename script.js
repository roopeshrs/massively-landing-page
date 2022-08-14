const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu-contents');
const closeBtn = document.querySelector('.fa-xmark')

hamburger.addEventListener('click', ()=>{
    hamburgerMenu.style.transform = "translateX(-500px)"
})

closeBtn.addEventListener('click', ()=>{
    hamburgerMenu.style.transform = "translateX(500px)"
})