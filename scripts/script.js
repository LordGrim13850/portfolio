anime({
    targets: '.hero, .tech-card, .cert-card',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo',
    delay: anime.stagger(200)
});

function openModal(imgSrc) {
    const modal = document.getElementById("imgModal");

    modal.classList.add("show");
    document.getElementById("modalImg").src = imgSrc;
}

function closeModal() {
    const modal = document.getElementById("imgModal");

    modal.classList.remove("show");
}


const text = "Aspiring Front-End Developer";
const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".tech-card, .cert-card");

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});