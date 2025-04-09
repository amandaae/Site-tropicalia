let fontSize = 1;
function increaseFont() {
  fontSize += 0.1;
  document.body.style.fontSize = fontSize + "em";
}
function decreaseFont() {
  fontSize -= 0.1;
  document.body.style.fontSize = fontSize + "em";
}
function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

// Efeito de aparecer as seções
document.addEventListener("DOMContentLoaded", () => {
  const fadeIns = document.querySelectorAll(".fade-in");
  fadeIns.forEach((section, index) => {
    setTimeout(() => {
      section.style.animationDelay = `${index * 0.3}s`;
      section.classList.add("visible");
    }, 100);
  });
});
