// =========================
// Loader
// =========================
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
});

// =========================
// Back To Top Button
// =========================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

if (topBtn) {
    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// =========================
// Mobile Menu
// =========================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

// =========================
// Dark / Light Mode
// =========================
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// =========================
// EmailJS Contact Form
// =========================
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_oyikn29",
            "template_6j2mcqd",
            this,
            "RMJn9H2SsACX0_c3w"
        )
        .then(() => {
            alert("✅ Message Sent Successfully!");
            contactForm.reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);

            if (error && error.text) {
                alert("❌ " + error.text);
            } else {
                alert("❌ Failed to send message!\n\nCheck Console (F12) for details.");
            }
        });
    });
}
const popup=document.getElementById("popup");
const title=document.getElementById("popup-title");
const files=document.getElementById("popup-files");

function openPSD(){

popup.style.display="flex";

title.innerHTML="PSD Files";

files.innerHTML=`

<div class="file">

Poster Design.psd

<a href="downloads/Poster.psd" download class="btn">

Download

</a>

</div>

<div class="file">

Logo Mockup.psd

<a href="downloads/Logo.psd" download class="btn">

Download

</a>

</div>

`;

}

function openPLP(){

popup.style.display="flex";

title.innerHTML="PLP Files";

files.innerHTML=`

<div class="file">

Thumbnail.plp

<a href="downloads/Thumbnail.plp" download class="btn">

Download

</a>

</div>

`;

}

function openAI(){

popup.style.display="flex";

title.innerHTML="AI Files";

files.innerHTML=`

<div class="file">

Business Card.ai

<a href="downloads/Card.ai" download class="btn">

Download

</a>

</div>

`;

}

function closePopup(){

popup.style.display="none";

}
document.querySelectorAll(".favorite i").forEach(icon=>{

icon.addEventListener("click",()=>{

icon.classList.toggle("fas");

icon.classList.toggle("far");

icon.style.color="#ff3b5c";

});

});
const search=document.getElementById("searchInput");

if(search){

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".resource-card").forEach(card=>{

let text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}
// =========================
// Resource Filter
// =========================

const filterButtons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".resource-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            } else {

                card.style.display =
                    card.dataset.category === filter
                        ? "block"
                        : "none";

            }

        });

    });

});
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display =
                text.includes(value)
                    ? "block"
                    : "none";

        });

    });

}
document.querySelectorAll(".favorite").forEach(item => {

    item.addEventListener("click", function () {

        this.classList.toggle("active");

    });

});
// =========================
// IMAGE PREVIEW
// =========================

const previewImages=document.querySelectorAll(".preview-img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const closeBtn=document.querySelector(".close-lightbox");

previewImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});
// ======================
// Favorite Save
// ======================

document.querySelectorAll(".favorite").forEach((btn,index)=>{

const key="favorite
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupFiles = document.getElementById("popup-files");

function openPSD() {
    popupTitle.textContent = "PSD Files";
    popupFiles.innerHTML = `
        <a href="downloads/flyer.psd" download class="btn">Download Flyer PSD</a>
    `;
    popup.style.display = "flex";
}

function openPLP() {
    popupTitle.textContent = "PLP Files";
    popupFiles.innerHTML = `
        <a href="downloads/project.plp" download class="btn">Download PLP File</a>
    `;
    popup.style.display = "flex";
}

function openAI() {
    popupTitle.textContent = "AI Files";
    popupFiles.innerHTML = `
        <a href="downloads/logo.ai" download class="btn">Download AI File</a>
    `;
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
}
// =========================
// Lightbox
// =========================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

document.querySelectorAll(".preview-img").forEach(img => {
    img.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
    });
});

closeLightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
