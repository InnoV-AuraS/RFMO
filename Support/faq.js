document.addEventListener("DOMContentLoaded", () => {
    // FAQ Toggle
    document.querySelectorAll(".faq-btn").forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                document.querySelectorAll(".faq-answer").forEach(item => item.style.display = "none");
                answer.style.display = "block";
            }
        });
    });

    // Hamburger Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const dashboard = document.getElementById("dashboard");

    menuToggle.addEventListener("click", () => {
        dashboard.classList.toggle("open");
    });

    // Smooth Scroll for Dashboard Links
    document.querySelectorAll("#dashboard a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});