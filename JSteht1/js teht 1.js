alert('tämä on JavaScript ohjelma');

function nimitehtava() {
  let nimi = prompt('Hei, mikä on nimesi');
  prompt(nimi + ' Tervetuloa');
}

function Ympyra() {
  let numero = prompt('mikä on ympyrän säde');


  prompt(numero * Math.PI * 2);
}

function nelio() {
var kanta = prompt('Kerro kanta');
var korkeus = prompt('Kerro korkeus');

var piiri = (+kanta) + (+kanta) + (+korkeus) + (+korkeus);
alert('Suorakulmion piiri' + piiri
    );

alert('Suorakulmion pinta-ala' +
    kanta * korkeus);
}

function luku() {
  var luku1 = prompt('Anna luku 1')
  var luku2 = prompt('Anna luku 2')
  var luku3 = prompt('Anna luku 3')

  var summa = (+luku1) + (+luku2) + (+luku3);
  var tulo = (+luku1) * (+luku2) * (+luku3);
  var keskiarvo = (+luku1) + (+luku2) + (+luku3);

  alert ('Summa ' + summa);
  alert('tulo ' + tulo);
  alert('keskiarvo ' + keskiarvo / 3);
}
function desimaali() {

  let nykyLe, nykyNa, nykyLu, nykyMitta, kilot, grammat;
  let leiviska = prompt("Montako leiviskaa?");
  let naula = prompt("Montako naulaa?");
  let luoti = prompt("Montako luotia?");
  nykyLu = 13.3;
  nykyNa = 32 * +nykyLu;
  nykyLe = 20 * +nykyNa;
  nykyMitta = +luoti * +nykyLu + +naula * +nykyNa + +leiviska * +nykyLe;
  kilot = (Math.floor(+nykyMitta / 1000));
  grammat = +nykyMitta - +kilot * 1000;

  alert("Massa nykymittojen mukaan: " + kilot + "Kg ja " + grammat + "g");

}

function saldo() {
  let saldo, korkoprosentti, vuosikorko, vuosisaldo;
  saldo = prompt("Tilin saldo:");
  korkoprosentti = prompt("Korkoprosentti:");
  vuosikorko = +saldo * +korkoprosentti / 100;
  vuosisaldo = +saldo + +vuosikorko;

  alert(
      "Vuosikorko: " + (desimaali(vuosikorko)) + "€, Saldo vuoden lopusa:" +
      (desimaali(vuosisaldo)) + "€<br>");
}

function getRandomInt() {
  let yes = prompt("Heitetäänkö noppaa? yes/no");

  let noppa1 = Math.floor(6 * Math.random());
  let noppa2 = Math.floor(6 * Math.random());
  let summa2 = +noppa1 + +noppa2;
  if ('yes' == yes) {
    alert("Heitit silmäluvut: " + noppa1 + " ja " + noppa2 +
        ", joiden summa on: " + +summa2);
  } else {
    alert("Et heittänyt noppaa.");
  }
}




function teht9() {
  let num1 = Math.floor(9 * Math.random());
  let num2 = Math.floor(9 * Math.random());
  let num3 = Math.floor(9 * Math.random());
  let num4 = Math.floor(6 * Math.random());
  let num5 = Math.floor(6 * Math.random());
  let num6 = Math.floor(6 * Math.random());
  let num7 = Math.floor(6 * Math.random());

  alert("Kolmenumeroinen koodi: " + (num1) + ", "+ (num2) + ", "+ (num3));
  alert("Neljänumeroinen koodi: " + (num4) + ", "+ (num5) + ", "+ (num6) + ", "+ (num7));

}