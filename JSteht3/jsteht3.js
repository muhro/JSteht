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


            alert('karkausvuodet valitsemallasi ajalla: ' + Avuosi)

            alert(erotus + ' hei ' + Avuosi)

        } 
      
    }
}

function teht331(){
  let alku, loppu, tulos;
  alku = prompt("Anna aloitusvuosi:");
  loppu = prompt("Anna loppuvuosi:");
  for (alku; alku <= loppu; alku++) {
    if ((alku % 4 == 0 && alku % 100 != 0) || alku % 400 == 0){
      tulos = alku;
      let node = document.createElement("LI");
      let textnode = document.createTextNode(tulos);
      node.appendChild(textnode);
      document.getElementById("lista").appendChild(node);
    }
  }
}


function teht34() {
  let i, maara, heitto, summa = 0, txt;
  alert('Heitetään noppaa ja tulostetaan summa');
  maara = prompt('Montako noppaa heitetään?');
  for (i = 0; i < maara; i++) {
    heitto = Math.floor(Math.random() * 6) + 1;
    summa += heitto;
  }
  txt = ('Noppien yhteissumma on: ' + summa);
  document.getElementById('arpakuutiot').innerHTML = txt;
}


function teht35() {
  let i, kokonaisluku, txt;
  alert('Onko luku alkuluku.');
  kokonaisluku = prompt('Anna kokonaisluku:');
  if (+kokonaisluku === 2) {
    txt = ('Kokonaisluku ' + kokonaisluku + ' on alkuluku');
    document.getElementById('alkuluku').innerHTML = txt;
  } else if (+kokonaisluku === 1) {
    txt = ('Kokonaisluku ' + kokonaisluku + ' ei ole alkuluku');
    document.getElementById('alkuluku').innerHTML = txt;
  }
  for (i = 2; i < kokonaisluku; i++) {
    if (kokonaisluku % i === 0) {
      txt = ('Kokonaisluku ' + kokonaisluku + ' ei ole alkuluku');
      document.getElementById('alkuluku').innerHTML = txt;
      break;
    } else {
      txt = ('Kokonaisluku ' + kokonaisluku + ' on alkuluku');
      document.getElementById('alkuluku').innerHTML = txt;
    }
  }
}



