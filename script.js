// =========================
// Loader
// =========================

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
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
            "template_atibmck",
            this

        ).then(function () {

            alert("✅ Message Sent Successfully!");

            contactForm.reset();

        }).catch(function (error) {

            alert("❌ Failed to send message!");

            console.log(error);

        });

    });

}
