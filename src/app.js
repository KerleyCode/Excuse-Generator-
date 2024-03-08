/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let element = document.querySelector(".excuse");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const getRandomInt = array => {
    return Math.floor(Math.random() * array.length);
  };
  let excuse =
    who[getRandomInt(who)] +
    " " +
    action[getRandomInt(action)] +
    " " +
    what[getRandomInt(what)] +
    " " +
    when[getRandomInt(when)] +
    ".";
  element.innerHTML = excuse;
};
