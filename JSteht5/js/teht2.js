
function teht2(){
  const ekakuva = document.getElementsByTagName('img')[0];
  const tokakuva = document.getElementsByTagName('img')[1];

  ekakuva.setAttribute('id','kuva1');
  tokakuva.setAttribute('id', 'kuva2');

  document.querySelector('#kuva1').style = "display: flex;";
  document.querySelector('#kuva2').classList.toggle('visible');
}
