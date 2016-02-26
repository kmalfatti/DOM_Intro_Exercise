console.log("Javascript is alive!");


function load() {
  document.getElementById('greeting').innerHTML = 'Hello World!';
  document.getElementById('essentials').style.backgroundColor = 'yellow';
  var gif = document.createElement('img');
  document.getElementById('greeting').appendChild(gif);
  document.getElementsByTagName('img')[0].src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
}
window.onload = load();

var li = document.getElementsByTagName('ul');
function afterwords() {
  for( var i=0; i<li.length; i++) {
  li[i].className = 'selected';
  li[i].removeEventListener('click', afterwords);
  }
}
document.addEventListener('click', afterwords);


// When the gray div is moused over, 
// it's removed from the DOM.

