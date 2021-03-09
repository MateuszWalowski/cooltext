"use strict";

var textarray = document.querySelector("#cooltext").textContent.split("");
document.querySelector("#cooltext").innerHTML = "";
var lettershown = [];

textarray.forEach((letter) => {
  let letterspan = `<span>${letter}</span>`;
  console.log(letterspan);
  lettershown.push(letterspan);
});
console.log(lettershown);
display();

function display() {
  let nocommas = lettershown.join("");
  console.log(nocommas);
  document.querySelector("#cooltext").innerHTML = nocommas;
  addanimation();
}

function addanimation() {
  let singleletters = document.querySelectorAll("#cooltext span");
  console.log(singleletters);
  singleletters.forEach((letter, N) => {
    if (letter.textContent !== " ") {
      setInterval(() => {
        letter.style.display = "inline-block";
        letter.classList.add("animation");
      }, N * 100);
    } else {
      letter.innerHTML = "&nbsp";
      letter.style.display = "inline-block";
    }
    console.log(letter.textContent);
  });
}
