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