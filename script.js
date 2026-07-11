/*=====================================
MZN Graphics Hub V2
Premium JavaScript
======================================*/


// ==============================
// Loader
// ==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

});



// ==============================
// AOS
// ==============================

if(typeof AOS!=="undefined"){

AOS.init({

duration:1000,

once:true

});

}



// ==============================
// Mobile Menu
// ==============================

const menuToggle = document.getElementById("menu-toggle");

const navLinks=document.querySelector(".nav-links");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});



// ==============================
// Back To Top
// ==============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}



// ==============================
// Theme Toggle
// ==============================

const themeBtn=document.getElementById("themeBtn");

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light");

themeBtn.innerHTML='<i class="fas fa-sun"></i>';

}

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light");

themeBtn.innerHTML='<i class="fas fa-sun"></i>';

}else{

localStorage.setItem("theme","dark");

themeBtn.innerHTML='<i class="fas fa-moon"></i>';

}

});

}
/*=====================================
SEARCH
======================================*/

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".resource-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(value)
                ? "block"
                : "none";

        });

    });

}


/*=====================================
FILTER
======================================*/

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


/*=====================================
FAVORITE
======================================*/

document.querySelectorAll(".favorite").forEach((btn, index) => {

    const key = "favorite_" + index;

    if (localStorage.getItem(key) === "true") {

        btn.classList.add("active");

    }

    btn.addEventListener("click", () => {

        btn.classList.toggle("active");

        localStorage.setItem(
            key,
            btn.classList.contains("active")
        );

    });

});


/*=====================================
LIGHTBOX PREVIEW
======================================*/

const previewImages = document.querySelectorAll(".preview-img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeLightbox = document.querySelector(".close-lightbox");

previewImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

if (lightbox) {

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}


/*=====================================
DOWNLOAD COUNTER
======================================*/

document.querySelectorAll(".resource-card").forEach((card, index) => {

    const downloadBtn = card.querySelector(".btn");

    const counter = card.querySelector(".download-count span");

    const key = "downloads_" + index;

    let count = Number(localStorage.getItem(key));

    if (!count) {

        count = Number(counter.innerText.replace(/,/g, ""));

    }

    counter.innerText = count.toLocaleString();

    if (downloadBtn) {

        downloadBtn.addEventListener("click", () => {

            count++;

            counter.innerText = count.toLocaleString();

            localStorage.setItem(key, count);

        });

    }

});
/*=====================================
EMAILJS CONTACT FORM
======================================*/

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitBtn = this.querySelector("button");

        const oldText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = "Sending...";

        emailjs.sendForm(

            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            this,
            "YOUR_PUBLIC_KEY"

        ).then(() => {

            alert("✅ Message Sent Successfully!");

            contactForm.reset();

        }).catch((error) => {

            console.error(error);

            alert("❌ Failed to send message!");

        }).finally(() => {

            submitBtn.disabled = false;
            submitBtn.innerHTML = oldText;

        });

    });

}


/*=====================================
ACTIVE NAVIGATION
======================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=====================================
COUNTER ANIMATION
======================================*/

const counters = document.querySelectorAll(".info-box h4");

const runCounter = (counter) => {

    const target = parseInt(counter.innerText);

    if (isNaN(target)) return;

    let value = 0;

    const speed = Math.max(1, Math.floor(target / 60));

    const update = () => {

        value += speed;

        if (value >= target) {

            counter.innerText = target + "+";

        } else {

            counter.innerText = value + "+";

            requestAnimationFrame(update);

        }

    };

    update();

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            runCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => observer.observe(counter));


/*=====================================
SMOOTH SCROLL
======================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});


/*=====================================
CONSOLE MESSAGE
======================================*/

console.log("%cMZN Graphics Hub", "font-size:28px;color:#3b82f6;font-weight:bold;");
console.log("%cWebsite Developed by Mezanur Rahman", "color:#22c55e;font-size:14px;");
