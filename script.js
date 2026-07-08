const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
// Theme Toggle

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.innerHTML='<i class="fas fa-sun"></i>';

}else{

themeBtn.innerHTML='<i class="fas fa-moon"></i>';

}

});
