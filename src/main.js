const reticle = document.getElementById("reticle");

let mouseX = 0;
let mouseY = 0;
let reticleX = 0;
let reticleY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  reticleX += (mouseX - reticleX) * 0.04;
  reticleY += (mouseY - reticleY) * 0.04;
  reticle.style.transform = `translate(${reticleX - 12.5}px, ${reticleY - 12.5}px)`;
  requestAnimationFrame(animate);
}

window.addEventListener("load", () => {
  // All images, fonts, and stylesheets are fully loaded
  animate();
});
  
