





//Làm mờ header trong chonPhim.html
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    let scrollY = window.scrollY;
    let opacity = Math.min(scrollY / 100, 1); //giới hạn từ 0 đến 1

    header.style.background = `rgba(0, 0, 0, ${opacity})`;
});
