function teht3() {
const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

  var holder = document.getElementById("kuva");

  for ( let i=0; i < kuvat.length; i+=1 ) {

    holder.innerHTML += "<li><img src="+kuvat[i]+"></li><br>";

  }
}

