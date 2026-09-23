const groupes=document.querySelectorAll(".portal-group");

const lampes=[
document.querySelector(".lucarne-gauche"),
document.querySelector(".lucarne-droite"),
document.querySelector(".fenetre-gauche"),
document.querySelector(".fenetre-droite"),
document.querySelector(".porte")
];

groupes.forEach((g,i)=>{

g.addEventListener("mouseenter",()=>{

lampes[i].style.opacity=".95";

});

g.addEventListener("mouseleave",()=>{

lampes[i].style.opacity="0";

});

});

document.querySelectorAll(".portal-group a").forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

document.querySelector(link.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
