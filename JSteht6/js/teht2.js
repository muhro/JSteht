document.getElementById("kuva").addEventListener("mouseenter", mouseEnter);
document.getElementById("kuva").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  document.getElementById("teksti").style.opacity = 1;
}

function mouseLeave() {
  document.getElementById("teksti").style.opacity = 0;
}