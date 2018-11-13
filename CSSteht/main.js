//teht1
console.log(document.getElementById('berry'));
console.log('I found the berry');
document.getElementById("berry").style.backgroundColor = "red";

//teht2
console.log(document.querySelector("li[data-foodtype='squishy']"));

//teht3
let list = document.getElementsByTagName("li");
console.log(list);

for(let fr = 0; fr < list.length; fr++ ){
  list[fr].style.listStyleType = 'none';
  console.log(list[fr].innerHTML);
  list[fr].style.width = '100px';

  if(list[fr].innerHTML === 'Pear'){
    list[fr].style.backgroundColor = 'green';
  }
}

//teht4
var fruitit = document.querySelectorAll("li");
console.log(fruitit);

fruitit.forEach(function(element) {
  element.style.borderStyle = "solid";
})