// Xử lý menu trên mobile
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            nav.classList.toggle("active");
        });
    }
});