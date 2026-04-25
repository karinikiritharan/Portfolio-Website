// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let msg = document.getElementById("successMsg");

    msg.innerText = "Sending...";
    msg.style.color = "yellow";

    setTimeout(() => {
        msg.innerText = "Message sent successfully 🚀";
        msg.style.color = "lightgreen";
        this.reset();
    }, 1500);
});


// TYPING ANIMATION
const text = ["Web Developer", "IT Student", "Problem Solver"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    current = text[i];

    if (isDeleting) {
        document.querySelector(".typing").textContent = current.substring(0, j--);
    } else {
        document.querySelector(".typing").textContent = current.substring(0, j++);
    }

    if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 80 : 120);
}

type();


// SCROLL REVEAL
window.addEventListener("scroll", function () {
    document.querySelectorAll(".reveal").forEach(el => {
        let top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});