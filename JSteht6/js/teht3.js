

const form = document.querySelector('form');
const numero1 = document.querySelector('input[name=numero1]');
const numero2 = document.querySelector('input[name=numero2]');
const submit = document.querySelector('input[name=submit]');
const p = document.querySelector('p');

document.getElementById("sum").addEventListener("click", function() {
  form.onsubmit = function(evt) {
    const summa = +numero1.value + +numero2.value;
    evt.preventDefault();
    p.innerText = 'yhteenlaskusi tulos on ' + +summa;

  }
});

document.getElementById("sub").addEventListener("click", function() {
  form.onsubmit = function(evt) {
    const ext = +numero1.value - +numero2.value;
    evt.preventDefault();
    p.innerText = 'vähennyslaskusi tulos on ' + +ext;
  }
});
document.getElementById("multi").addEventListener("click", function() {
  form.onsubmit = function(evt) {
    evt.preventDefault();
    p.innerText = ' kertolaskusi tulos on ' + numero1.value * numero2.value;
  }
});
document.getElementById("divv").addEventListener("click", function() {
  form.onsubmit = function(evt) {
    evt.preventDefault();
    p.innerText = 'jakolaskus tulos on ' + numero1.value / numero2.value;
  }
});

