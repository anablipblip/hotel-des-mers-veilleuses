const portals=document.querySelectorAll(".portal-group");

portals.forEach(group=>{

  const word=group.dataset.word;

  const bubble=document.createElement("div");
  bubble.className="portal-bubble";

  const txt=document.createElement("div");
  txt.className="portal-word";

  [...word].forEach((letter,i)=>{

    const span=document.createElement("span");
    span.style.animationDelay=`${i*60}ms`;
    span.textContent=letter;
    txt.appendChild(span);

  });

  bubble.appendChild(txt);

  group.appendChild(bubble);

  group.addEventListener("mousemove",e=>{

    const rect=group.getBoundingClientRect();

    bubble.style.left=e.clientX-rect.left-37+"px";
    bubble.style.top=e.clientY-rect.top-70+"px";

  });

});
