





//Làm mờ header trong chonPhim.html
window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");

    let scrollY = window.scrollY;
    let opacity = Math.min(scrollY / 200, 1); //giới hạn từ 0 đến 1

    header.style.background = `rgba(51, 51, 51, ${opacity})`;
});
