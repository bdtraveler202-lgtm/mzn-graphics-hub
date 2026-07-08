// MZN Graphics Hub

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#08101d";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        header.style.background = "rgba(11,17,32,.90)";
        header.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href="#"]').forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();
    });
});

console.log("MZN Graphics Hub Loaded Successfully");
