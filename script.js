function changeFont(font){

    document.body.style.fontFamily = font;

}

function scrollToSection(id){

    document.getElementById(id).scrollIntoView({

        behavior:"smooth"

    });

}

const cards = document.querySelectorAll(".iphone-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("selected");

    });

});
