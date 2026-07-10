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
