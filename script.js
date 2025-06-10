const texts = [" Welcome to my business. ", " My business is based on new technology. ", " It is a booming technology. "];
const speed = 100; // typing speed
const delay = 4000; // delay between texts
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function type() {
    const currentText = texts[index];
    if (isDeleting) {
        typedText.textContent = currentText.substring(0, charIndex--);
    } else {
        typedText.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, delay);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? speed / 2 : speed);
    }
}

type();