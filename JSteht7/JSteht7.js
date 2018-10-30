//tehtävä 1
function muutos() {
  let gallons = prompt('kuinka monta galloonaa bensaa? ')
  let litra = 3.785;
  let lopputulos = +gallons * +litra;


    alert('galloonat ovat litroina : ' + +lopputulos)
  }
// tehtävä 2

function muutos2() {
  let gallons = prompt('kuinka monta galloonaa bensaa? ')
  let litra = 3.785;
  let lopputulos = +gallons * +litra;


  return( +lopputulos);
}
function teht72() {
  alert(muutos2());
}

// tehtävä 3
function itseisarvo() {
  let arvo = prompt('anna luku');
  
    let itse = Math.abs(+arvo);
    return (itse);
  }

function teht73() {
  alert(itseisarvo());
}