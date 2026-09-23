
document.querySelectorAll('.portal-group a').forEach(link=>{

link.addEventListener('click',e=>{

e.preventDefault();

const cible=document.querySelector(link.getAttribute('href'));

if(cible){

cible.scrollIntoView({

behavior:'smooth',

block:'start'

});

}

});

});
