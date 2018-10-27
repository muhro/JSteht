function teht31() {
  let numero = prompt('valitse numero');

  alert(kertoma(+numero));

}function kertoma(numero) {
  if (numero < 0)
    return 1;
  else if (numero == 0)
    return 1;
  else {
    return (numero * kertoma(numero - 1));
  }
}

function teht32() {
  let luku;
  luku = prompt('Anna jokin luku');

  while (luku<0) {
    luku = prompt('Luvun on oltava positiivinen. Anna jokin toinen luku.');
    alert(luku);
  }

  alert('Lukusi neliöjuuri on ' + Math.sqrt(luku) + '.');
}

