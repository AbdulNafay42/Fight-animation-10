// character 1

var left = 0;
var character = document.getElementById("character");
var right = 0;
var character2 = document.getElementById("character2");

function abc() {
  if (event.keyCode === 68 && left < 1400) {
    left = left + 10;
    character.style.left = left + "px";
    character.src = "images/predator-warrior-capcom-walk.gif";
  }
  if (event.keyCode === 65 && left > 0) {
    left = left - 10;
    character.style.left = left + "px";
    character.src = "images/predator-warrior-capcom-walk.gif";
  }
  if (event.keyCode === 32) {
    character.style.width = "400px";
    character.style.height = "400px";
    character.src = "images/predator-warrior-capcom-air-projectile.gif";
    setTimeout(function () {
      character.src = "images/predator-warrior-capcom-look.gif";
      character.style.width = "200px";
      character.style.height = "200px";
    }, 3000);
  }
  if (event.keyCode === 38 && right < 1400) {
    right = right + 10;
    character2.style.right = right + "px";
    character2.src = "images/iron-walk.gif";
}
if (event.keyCode === 40 && right > 0) {
  right = right - 10;
  character2.style.right = right + "px";
  character2.src = "images/iron-walk.gif";
}
if (event.keyCode === 37) {
  character2.style.width = "400px";
  character2.style.height = "400px";
  character2.src = "images/iron-fly.gif";
  setTimeout(function () {
    character2.src = "images/iron-man-stance.gif";
    character2.style.width = "200px";
    character2.style.height = "200px";
  }, 3000);
}
}


window.onkeydown = abc;
 /// character 2



