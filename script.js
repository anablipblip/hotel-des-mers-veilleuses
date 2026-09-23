const veilleuses = document.querySelectorAll(".veilleuse");

veilleuses.forEach(v => {

  const mot = v.dataset.word;

  const bulle = document.createElement("div");
  bulle.className = "portal-bubble";

  const texte = document.createElement("div");
  texte.className = "portal-word";

  [...mot].forEach((lettre, i) => {
    const span = document.createElement("span");
    span.textContent = lettre;
    span.style.animationDelay = `${i * 60}ms`;
    texte.appendChild(span);
  });

  bulle.appendChild(texte);
  v.appendChild(bulle);

  v.addEventListener("mousemove", e => {

    const r = v.getBoundingClientRect();

    bulle.style.left = e.clientX - r.left - 37 + "px";
    bulle.style.top = e.clientY - r.top - 70 + "px";

  });

});
