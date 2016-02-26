console.log("Javascript is alive!");

function load() {
  document.getElementById('greeting').innerHTML = 'Hello World!';
  document.getElementById('essentials').style.backgroundColor = 'yellow';
  var gif = document.createElement('img');
  document.getElementById('greeting').appendChild(gif);
  document.getElementsByTagName('img')[0].src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
}
window.onload = load();

var li = document.getElementsByTagName('li');
function afterwords() {
  for( var i=0; i<li.length; i++) {
  li[i].addEventListener('click', afterwords);
  li[i].className = 'selected';
}
    var curSelected = document.querySelector(".selected");
    if (curSelected) {
      curSelected.className.remove("selected");
    }
    this.className.add("selected");
}
document.addEventListener('click', afterwords);



//   if (li[i]) {
//       li[i].className.remove('selected');
//     this[i].className.add('selected');
//   }
// }



// When the gray div is moused over, 
// it's removed from the DOM.


// document.querySelector('ghosting').addEventListener('mousover',function(){this.removed();});

document.querySelector("#ghosting").addEventListener('mouseover', grey);

  function grey() {
    document.querySelector("#ghosting").remove(); 
  }

// When the orange div is moused over, its width doubles.
 // When the mouse moves out of the div, it returns to its original size.

document.querySelector("#resize").addEventListener('mouseenter', resize);

  function resize() {
    this.style.width = '400px';
}

document.querySelector("#resize").addEventListener('mouseleave', reset);

  function reset() {
    this.style.width = '200px';
}