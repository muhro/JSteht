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

function teht33() {
    let Avuosi = prompt('Mikä on aloitus vuosi?');
    let Bvuosi = prompt('Mikä on lopetus vuosi?');
    let Cvuosi = +Bvuosi + 1;
    let erotus = +Cvuosi - +Avuosi;
    
    for (erotus >= 0; erotus--; Avuosi++){
        if ((0 == Avuosi % 4) && (0 != Avuosi % 100) || (0 == Avuosi % 400)) {

            alert(erotus + ' hei ' + Avuosi)
        } 
      
    }
}
