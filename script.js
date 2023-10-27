// JavaScript não é necessário para a animação, mas você pode usar para interações adicionais.

// Exemplo: Faça o Pac-Man seguir o cursor do mouse.
document.addEventListener("mousemove", (e) => {
    const pacman = document.querySelector(".pacman");
    const x = e.clientX;
    const y = e.clientY;
    pacman.style.left = x + "px";
    pacman.style.top = y + "px";
});
