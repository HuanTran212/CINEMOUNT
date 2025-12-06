





//Làm mờ header trong chonPhim.html
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    let scrollY = window.scrollY;
    let opacity = Math.min(scrollY / 100, 1); //giới hạn từ 0 đến 1

    header.style.background = `rgba(0, 0, 0, ${opacity})`;
});

   const tracks = document.querySelectorAll('.weekly-track');

// Dùng vòng lặp để xử lý từng thanh trượt một
tracks.forEach((track) => {
    const moviesContent = track.innerHTML;
    // Nhân đôi nội dung cho từng thanh riêng biệt
    track.innerHTML = moviesContent + moviesContent;
});
const moviesData = [
    {
        title: "Bí Kíp Luyện Rồng: Live Action",
        year: "2024",
        rating: "9.8",
        duration: "1h 50m",
        desc: "Câu chuyện về một chàng trai trẻ với ước mơ trở thành thợ săn rồng, nhưng định mệnh lại đưa đẩy anh đến tình bạn bất ngờ với một chú rồng. Giống như bộ phim hay gốc từ năm 2010, Bí Kíp Luyện Rồng phiên bản live-action lần này diễn ra trên Đảo Berk, nơi người Viking và rồng đã là kẻ thù không đội trời chung trong nhiều thế hệ. Nhưng khi Hiccup (Mason Thames) – con trai của Tù trưởng Stoick the Vast đi ngược lại truyền thống hàng thế kỷ để kết bạn với Toothless - một con rồng Night Fury, chính giây phút đó anh ấy đã phá vỡ quy tắc vốn có của cộng đồng và mở ra sự căng thẳng tột cùng cho cả người Viking và rồng.",
        img: "images/dragon.jpg",
        trailerId: "tCrdzzpk6qg" //Chỉ lấy mã sau chữ v=
    },
    {
        title: "Avengers: Cuộc Chiến Vô Cực",
        year: "2018",
        rating: "8.5",
        duration: "2h 29m",
        desc: "Avengers: Cuộc Chiến Vô Cực đánh dấu màn ảnh trận chiến cuối cùng hoành tráng và khốc liệt nhất. Biệt đội Avengers, cùng với các đồng minh siêu anh hùng sẽ phải đối mặt với thử thách cam go nhất: chống lại kẻ thù hùng mạnh Thanos. Tham vọng hủy diệt toàn bộ vũ trụ của Thanos buộc các siêu anh hùng phải hy sinh tất cả để bảo vệ sự sống.",
        img: "images/avengers.jpg",
        trailerId: "k2b2Jb24hQc"
    },
    {
        title: "Thám Tử Lừng Danh Conan Movie 28: Dư Ảnh của Độc Nhãn",
        year: "2025",
        rating: "8.0",
        duration: "1h 49m",
        desc: "Hành trình mới của Moana ra khơi xa để kết nTrên những ngọn núi tuyết của Nagano, một vụ án bí ẩn đã đưa Conan và các thám tử quay trở lại quá khứ. Thanh tra Yamato Kansuke - người đã bị thương nặng trong một trận tuyết lở nhiều năm trước - bất ngờ phải đối mặt với những ký ức đau thương của mình trong khi điều tra một vụ tấn công tại Đài quan sát Nobeyama. Cùng lúc đó, Mori Kogoro nhận được một cuộc gọi từ một đồng nghiệp cũ, tiết lộ mối liên hệ đáng ngờ giữa anh ta và vụ án đã bị lãng quên từ lâu. Sự xuất hiện của Morofushi Takaaki, cùng với những nhân vật chủ chốt như Amuro Tooru, Kazami và cảnh sát Tokyo, càng làm phức tạp thêm cuộc điều tra. Khi quá khứ và hiện tại đan xen, một bí ẩn rùng rợn dần dần được hé lộ - và ký ức của Kansuke nắm giữ chìa khóa cho mọi thứ.ối các hòn đảo...",
        img: "images/connan28.jpg",
        trailerId: "5bKBCTpbTb4" 
    },
    {
        title: "Zootopia 2",
        year: "2025",
        rating: "9.0",
        duration: "1h 40m",
        desc: "Judy Hopps và Nick Wilde trở lại với vụ án bí ẩn mới...",
        img: "images/zootopia2.jpg",
        trailerId: "BjkIOU5PhyQ&t=8s" 
    },
    {
        title: "Avatar 3: Lửa và Tro Tàn",
        year: "2025",
        rating: "9.9",
        duration: "3h 10m",
        desc: "Jake Sully đối mặt với tộc người Na'vi lửa đầy hung hãn...",
        img: "images/avarta3.jpg",
        trailerId: "nb_fFj_0rq8"
    }
];

const skewCards = document.querySelectorAll('.skew-card'); 
const infoPanel = document.getElementById('movie-info-panel');
const panelVideo = document.getElementById('panel-video');

function updateInfo(index) {
    const movie = moviesData[index];
    if (!movie) return;

    document.getElementById('panel-title').innerText = movie.title;
    document.getElementById('panel-year').innerText = movie.year;
    document.getElementById('panel-rating').innerText = movie.rating;
    document.getElementById('panel-duration').innerText = movie.duration;
    document.getElementById('panel-desc').innerText = movie.desc;
    document.getElementById('panel-img').src = movie.img;

    const embedUrl = `https://www.youtube.com/embed/${movie.trailerId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${movie.trailerId}`;
    
    panelVideo.src = embedUrl;

    const textContent = document.querySelector('.panel-text');
    const imgContent = document.querySelector('.panel-poster');

    textContent.style.animation = 'none';
    imgContent.style.animation = 'none';

    textContent.offsetHeight; 
    imgContent.offsetHeight; 

    textContent.style.animation = 'slideInLeft 0.5s ease';
    imgContent.style.animation = 'slideInRight 0.5s ease';

    infoPanel.classList.add('show');
}

skewCards.forEach((card, index) => {
    card.addEventListener('click', () => {

        document.querySelector('.skew-card.active')?.classList.remove('active');
        card.classList.add('active');

        updateInfo(index);
    });
});
updateInfo(0);

