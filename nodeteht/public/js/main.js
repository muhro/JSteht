'use strict'

const lomake = document.querySelector('#lomake');
const kuva = document.querySelector('#kuva');

const lahetaLomake = (evt) => {
  evt.preventDefault();
  const fd = new FormData(lomake);
  const asetukset = {
    method: 'post',
    body: fd,
  };

  fetch('/upload', asetukset).then((response) => {
     return response.json();
  }).then((json) => {
    console.log(json);
    kuva.src = 'kuvat/' + json.filename;
  });
};

lomake.addEventListener('submit', lahetaLomake);

