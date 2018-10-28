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
  let tulsotettava = koira.slice(-1);

  for ( i=0; i < nimetmaara; i++){

    koira.push( prompt('kerro koirien nimet'));
  }
  alert(koira.sort().reverse())
}

