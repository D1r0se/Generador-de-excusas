/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let excusa =
    who[parseInt(Math.random() * who.length)] +
    " " +
    action[parseInt(Math.random() * action.length)] +
    " " +
    what[parseInt(Math.random() * what.length)] +
    " " +
    when[parseInt(Math.random() * when.length)];

  document.getElementById("excuse").innerHTML = excusa;
};
