const groups = document.querySelectorAll(".portal-group");

groups.forEach(group=>{

  const word = group.dataset.word;
  const glow = document.querySelector(`.veilleuse[data-word="${word}"]`);

  let bubble;
  let letters=[];
  let bubbles=[];

  group.addEventListener("mouseenter", ()=>{

    if(glow) glow.style.opacity="1";

    bubble=document.createElement("div");
    bubble.className="word-bubble";
    bubble.textContent=word;
    document.body.appendChild(bubble);

    const r=glow.getBoundingClientRect();

    bubble.style.left=(r.left+r.width/2)+"px";
    bubble.style.top=(r.top+r.height/2-20)+"px";

    setTimeout(()=>bubble.classList.add("show"),20);

    setTimeout(()=>{

      bubble.textContent="";

      [...word].forEach((letter,i)=>{

        const span=document.createElement("span");
        span.className="flying-letter";
        span.textContent=letter;
        document.body.appendChild(span);

        span.style.left=(r.left+r.width/2)+"px";
        span.style.top=(r.top+r.height/2-20)+"px";

        letters.push(span);

        setTimeout(()=>{
          span.classList.add("fly");
          span.style.transform=`translate(${(Math.random()-0.5)*140}px,-${280+Math.random()*120}px) rotate(${(Math.random()-0.5)*40}deg)`;
        },i*90);

      });

      for(let i=0;i<6;i++){

        const b=document.createElement("div");
        b.className="bubble";
        document.body.appendChild(b);

        b.style.left=(r.left+r.width/2+(Math.random()-0.5)*20)+"px";
        b.style.top=(r.top+r.height/2)+"px";
        b.style.setProperty("--dx",`${(Math.random()-0.5)*90}px`);
        b.style.setProperty("--dy",`${-260-Math.random()*140}px`);

        bubbles.push(b);

      }

    },650);

  });

  group.addEventListener("mouseleave", ()=>{

    if(glow) glow.style.opacity="0";

    if(bubble){
      bubble.remove();
      bubble=null;
    }

    letters.forEach(l=>l.remove());
    letters=[];

    bubbles.forEach(b=>b.remove());
    bubbles=[];

  });

});
