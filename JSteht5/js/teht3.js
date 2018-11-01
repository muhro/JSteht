function teht3() {
const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];



  for ( let i=0; i < kuvat.length; i+=1 ) {

    const lista = document.querySelector('ul');

    lista.innerHTML += '<li><img src=' + kuvat[i] + '></li>';

  }
}

