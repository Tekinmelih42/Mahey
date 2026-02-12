<<<<<<< HEAD
let noClickCount = 0;

function clickfunc() {
    window.location.href = "page-yes.html";
}

function increaseSize() {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const message = document.getElementById("message");

    noClickCount++;

    // Agrandir le bouton YES
    yesButton.style.width = (yesButton.offsetWidth + 150) + 'px';
    yesButton.style.height = (yesButton.offsetHeight + 150) + 'px';

    const currentFontSize = window.getComputedStyle(yesButton).fontSize;
    yesButton.style.fontSize = (parseInt(currentFontSize) + 35) + 'px';

    // Messages évolutifs
    if (noClickCount === 1) {
        message.textContent = "T’es sûre ? 😏";
    } 
    else if (noClickCount === 2) {
        message.textContent = "Réfléchis bien… 👀❤️";
    } 
    else if (noClickCount === 3) {
        message.textContent = "Bon… j’crois que t’as compris 😌";
    } 
    else if (noClickCount >= 4) {
        noButton.style.display = "none";
        message.textContent = "T’as plus vraiment le choix maintenant 😘💖";
    }
}
=======
let noClickCount = 0;

function clickfunc() {
    window.location.href = "page-yes.html";
}

function increaseSize() {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const message = document.getElementById("message");

    noClickCount++;

    // Agrandir le bouton YES
    yesButton.style.width = (yesButton.offsetWidth + 150) + 'px';
    yesButton.style.height = (yesButton.offsetHeight + 150) + 'px';

    const currentFontSize = window.getComputedStyle(yesButton).fontSize;
    yesButton.style.fontSize = (parseInt(currentFontSize) + 35) + 'px';

    // Messages évolutifs
    if (noClickCount === 1) {
        message.textContent = "T’es sûre ? 😏";
    } 
    else if (noClickCount === 2) {
        message.textContent = "Réfléchis bien… 👀❤️";
    } 
    else if (noClickCount === 3) {
        message.textContent = "Bon… j’crois que t’as compris 😌";
    } 
    else if (noClickCount >= 4) {
        noButton.style.display = "none";
        message.textContent = "T’as plus vraiment le choix maintenant 😘💖";
    }
}
>>>>>>> 5eb3274eeffa477c46530070188f4ab3e9ae1bc3
