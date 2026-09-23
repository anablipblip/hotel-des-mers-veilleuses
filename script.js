// Respiration des vagues

gsap.to(".wave1",{

  y:-3,

  duration:8,

  repeat:-1,

  yoyo:true,

  ease:"sine.inOut"

});

gsap.to(".wave2",{

  y:4,

  duration:10,

  repeat:-1,

  yoyo:true,

  ease:"sine.inOut"

});
}
