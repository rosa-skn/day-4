document.addEventListener("DOMContentLoaded", function() {
    let text = document.getElementsByTagName('p');
    for (var i = 0; i < text.length; i++) {
        text[i].innerHTML = i; 
    }});
