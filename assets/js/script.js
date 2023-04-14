"use strict";

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Supprime la classe active de tous les boutons
    btns.forEach((b) => {
      b.classList.remove("active");
    });

    // Ajoute la classe active au bouton cliqué
    btn.classList.add("active");
  });
});
