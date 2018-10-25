
function teht21(){
let kuha = prompt('kuinka pitkä kuha on senttimetreissä? ');

  if (kuha < 37){
    alert('Kuha on alikasvuinen');
  }else {
    alert('Kuha on hyvä');
  }
}

function teht22() {
  let tupa = prompt('Mikä on nimesi?');

  function valinta1(){
    return Math.floor(Math.random()*3);
  }

   valinta = ['rohkelikko', 'puuskapuh', 'korpinkynsi', 'luihunen'];

  console.log(valinta1())
  alert(tupa + ' sinä olet ' + valinta[valinta1()]);
}

function teht23() {
  let sukupuoli = prompt('Oletko mies vai nainen? ');
  let arvo = prompt('Kerro hemoglobiinbi arvosi. ');

  if(sukupuoli == 'mies') {
    if (arvo >= 117 && arvo <= 175){
      alert('Olet kunnossa');
    } else{
    alert('mene hoitoon');}

  }else {
      if (arvo >= 134 && arvo <= 195) {
        alert('Olet kunnossa');
      }else{
        alert('mene hoitoon');
      }
    }
}
