import "bootstrap";
import "./style.css";


window.onload = function() {
  let who = ['Lilies', 'Roses', 'Tulips', 'Peonies', 'Daisies'];
  let what = ['stems', 'petals', 'roots', 'seeds'];
  let action = ['glisten', 'scream', 'cry', 'dance'];
  let when = ['at night', 'during the afternoon', 'in the morning', 'during the witching hour'];

  function getRandomNumber(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
  }

  function getRandom(anyArray) {
    let max = anyArray.length;
    let min = 0;
    let random = getRandomNumber(min, max);
    return anyArray[random];
  }

  function generateExcuse() {
    return `${getRandom(who)} ${getRandom(what)} ${getRandom(action)} ${getRandom(when)}`;
  }

  document.querySelector('#excuse').innerText = generateExcuse();

 
  document.querySelector("button").onclick = function() {
  document.getElementById("excuse").innerText = generateExcuse();
  };
};