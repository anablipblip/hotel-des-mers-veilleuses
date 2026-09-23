gsap.to(".wave1",{
  y:-4,
  duration:8,
  repeat:-1,
  yoyo:true,
  ease:"sine.inOut"
});

gsap.to(".wave2",{
  y:3,
  duration:10,
  repeat:-1,
  yoyo:true,
  ease:"sine.inOut"
});
/* Veilleuse */

const veilleuse=document.querySelector(".veilleuse");

if(window.matchMedia("(hover:hover)").matches){

  window.addEventListener("mousemove",(e)=>{

    gsap.to(veilleuse,{
      x:e.clientX,
      y:e.clientY,
      duration:.18,
      ease:"power2.out"
    });

    veilleuse.style.opacity=1;
  });

  window.addEventListener("mouseleave",()=>{
    veilleuse.style.opacity=0;
  });

}
