/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function randomItem(arr) {
  const index = randomIndex(arr);
  return arr[index];
}

window.onload = function() {
  //write your code here
  console.log("Excuse generator project");

  const whos = ["The dog", "My brother", "My aunt", "My teacher", "My boss"];
  const whats = ["ate", "destroyed", "burned", "lost", "sold"];
  const avoids = ["my homework", "my tickets", "my chores", "my check"];
  const whens = ["yesterday", "last week", "last month", "last friday"];

  const who = randomItem(whos);
  const what = randomItem(whats);
  const avoid = randomItem(avoids);
  const when = randomItem(whens);

  const randomExcuse = who + " " + what + " " + avoid + " " + when;

  // DOM (Document Object Model)
  document.querySelector("h1").innerText = randomExcuse;
};
