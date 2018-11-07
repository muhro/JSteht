function teht41() {
  let luku = [];

  for (let input = 0; input < 5; input++) {
    luku.push(prompt('anna luku'));
  }
  alert([luku.reverse()]);
}

function teht42() {
  let maara = prompt('osallistujien määrä?');
  let nimet = [];
  let nimimaara =  [];

  for ( maara > 0; maara--;) {
    nimet.push(prompt('anna heidän nimet'));
    nimimaara.push(nimet.length);

    let node = document.createElement("LI");
    let textnode = document.createTextNode(nimimaara.slice(-1) + '  ' + nimet.slice(-1));
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);

    }
}
function teht43() {

  let koira = [];
  let nimetmaara = 6;

  for ( i=0; i < nimetmaara; i++){

    koira.push( prompt('kerro koirien nimet'));
  }
  alert(koira.sort().reverse())
}


function teht44() {
  let numerot = [];
  let luku = prompt('Anna jokin luku');

  while(luku < 0 || luku > 0){
    numerot.push(luku);
    luku = prompt('Anna uusi luku.');
  }
alert('luvut' + numerot.sort().reverse())

}

function teht45() {
  let array = [];
  let koko = 1000, prompti, i;
  for (i = 0; i < koko; i++) {
    prompti = prompt('Anna luku:');
    if (array.includes(prompti)) {
      alert('Luku on jo syötetty!');
      return;
    } else {
      array.push(prompti);
      console.log(array);
    }
  }
}
function teht46() {
  let prompti = 1;
  let array = [];
  while (+prompti !== 0) {
    prompti = prompt('Anna luku:');
    array.push(prompti);
  }
  if (+prompti === 0 || prompti == null) {
    array.splice(-1);
    array.sort(function(a, b) {
      return a - b;
    });
    if (array.length % 2 === 0) {
      alert('Mediaani on: ' + (+array[array.length / 2] + +array[(array.length / 2) - 1]) / 2);


    } else {
      alert('Mediaani on: ' + +array[(array.length - 1) / 2]);

    }
  }
}
