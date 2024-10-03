window.onresize = function() {
  alert("Size matters");};
window.onload = function() {
  const image = document.querySelector("img[src='../Iphone22.png']");
  image.addEventListener("mouseover", function() {
  alert("Pretty, isn't it?");
    });};
