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
    who[parseInt(Math.random() * 4)] +
    " " +
    action[parseInt(Math.random() * 4)] +
    " " +
    what[parseInt(Math.random() * 3)] +
    " " +
    when[parseInt(Math.random() * 5)];

  document.getElementById("excuse").innerHTML = excusa;
};
