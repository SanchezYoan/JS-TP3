// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const navScroll = 20;
const imgScroll = 200;
const popUpScroll = 1000;

const nav = document.querySelector("#navbar")
const img = document.querySelector("#imgImprovise")
const popUp = document.querySelector(".pop-up")
const closePopUp = document.querySelector("#closeBtn")

window.addEventListener("scroll", () => {
    if(window.scrollY > navScroll) {
        nav.style.height = "50px";
    } else {
        nav.style.height = "90px";
    };
    
    if(window.scrollY > imgScroll) {
        img.style.opacity = "1";
        img.style.transform = "translateX(-100px)";
    }
    
    if(window.scrollY > popUpScroll) {
        popUp.style.opacity = "1";
        popUp.style.transform = "translate(0)"
    }
})

closePopUp.addEventListener("click", () => {
    popUp.remove()
})