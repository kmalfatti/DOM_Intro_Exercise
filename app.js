console.log("Javascript is alive!");

function load() {
  document.getElementById('greeting').innerHTML = 'Hello World!';
  document.getElementById('essentials').style.backgroundColor = 'yellow';
  var gif = document.createElement('img');
  document.getElementById('greeting').appendChild(gif);
  document.getElementsByTagName('img')[0].src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
}
window.onload = load();

var li = document.querySelectorAll('li');
  for( var i=0; i<li.length; i++) {
  li[i].addEventListener('click', afterwords);
}

var curSelected = document.querySelector(".selected");
function afterwords() {
  if (curSelected) {
    curSelected.className = ("");
  }
    // this. is referring to li[i]
    this.classList.add("selected");
    document.querySelectorAll("img")[1].setAttribute("src","./images/" + this.innerHTML + ".jpeg");
}

document.querySelector("#ghosting").addEventListener('mouseover', grey);
  function grey() {
    document.querySelector("#ghosting").remove(); 
  }

document.querySelector("#resize").addEventListener('mouseenter', resize);
  function resize() {
    this.style.width = '400px';
}

document.querySelector("#resize").addEventListener('mouseleave', reset);
  function reset() {
    this.style.width = '200px';
}

document.getElementById('reset').addEventListener('click', resetButton);
function resetButton() {
  var list = document.querySelectorAll("li");
  for (var i = 0; i < list.length; i++) {
    list[i].className = "";
  }
  document.querySelectorAll("img")[1].setAttribute("src","./images/panic.jpeg");
}

window.onload = function(){
document.querySelector('body').addEventListener('keydown', keypress);
};
function keypress(event) {
if (event.keyCode >= 48 && event.keyCode <= 57) {
  alert("I HATE NUMBERZZZ!");
    }
}

window.addEventListener("keydown", checkKeyPressed);
 
function checkKeyPressed(e) {
   console.log(e);
  
}
