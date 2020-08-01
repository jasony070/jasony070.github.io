// Typewriting effect
var i=0, title;
title = "Hello, I'm Jason."

function typing() {
  if(i<title.length){
    document.getElementById("title").innerHTML += title.charAt(i);
    i++;
    setTimeout(typing,50); 
  }
}
typing();