





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
        trailerId: "tCrdzzpk6qg", //Chỉ lấy mã sau chữ v=
        link: "xp-bikipluyenrong.html"
    },
    {
        title: "Avengers: Cuộc Chiến Vô Cực",
        year: "2018",
        rating: "8.5",
        duration: "2h 29m",
        desc: "Avengers: Cuộc Chiến Vô Cực đánh dấu màn ảnh trận chiến cuối cùng hoành tráng và khốc liệt nhất. Biệt đội Avengers, cùng với các đồng minh siêu anh hùng sẽ phải đối mặt với thử thách cam go nhất: chống lại kẻ thù hùng mạnh Thanos. Tham vọng hủy diệt toàn bộ vũ trụ của Thanos buộc các siêu anh hùng phải hy sinh tất cả để bảo vệ sự sống.",
        img: "images/avengers.jpg",
        trailerId: "k2b2Jb24hQc",
        link: "xp-avenger.html"
    },
    {
        title: "Thám Tử Lừng Danh Conan Movie 28: Dư Ảnh của Độc Nhãn",
        year: "2025",
        rating: "8.0",
        duration: "1h 49m",
        desc: "Trên những ngọn núi tuyết của Nagano, một vụ án bí ẩn đã đưa Conan và các thám tử quay trở lại quá khứ. Thanh tra Yamato Kansuke - người đã bị thương nặng trong một trận tuyết lở nhiều năm trước - bất ngờ phải đối mặt với những ký ức đau thương của mình trong khi điều tra một vụ tấn công tại Đài quan sát Nobeyama. Cùng lúc đó, Mori Kogoro nhận được một cuộc gọi từ một đồng nghiệp cũ, tiết lộ mối liên hệ đáng ngờ giữa anh ta và vụ án đã bị lãng quên từ lâu. Sự xuất hiện của Morofushi Takaaki, cùng với những nhân vật chủ chốt như Amuro Tooru, Kazami và cảnh sát Tokyo, càng làm phức tạp thêm cuộc điều tra. Khi quá khứ và hiện tại đan xen, một bí ẩn rùng rợn dần dần được hé lộ - và ký ức của Kansuke nắm giữ chìa khóa cho mọi thứ.",
        img: "images/connan28.jpg",
        trailerId: "5bKBCTpbTb4",
        link: "xp-conan.html"
    },
    {
        title: "Zootopia 2",
        year: "2025",
        rating: "9.0",
        duration: "1h 50m",
        desc: "Hai thám tử Judy Hopps và Nick Wilde bước vào hành trình truy tìm một sinh vật bò sát bí ẩn vừa xuất hiện tại Zootopia và khiến cả vương quốc động vật bị đảo lộn. Để phá được vụ án, Judy và Nick buộc phải hoạt động bí mật tại những khu vực mới lạ của thành phố – nơi mối quan hệ đồng nghiệp của họ bị thử thách hơn bao giờ hết.",
        img: "images/zootopia2.jpg",
        trailerId: "BjkIOU5PhyQ&t=8s",
        link: "xp-Zootopia.html"
    },
    {
        title: "Avatar 3: Lửa và Tro Tàn",
        year: "2025",
        rating: "9.9",
        duration: "3h 10m",
        desc: "Jake Sully đối mặt với tộc người Na'vi lửa đầy hung hãn...",
        img: "images/avarta3.jpg",
        trailerId: "nb_fFj_0rq8",
        link: "xp-avarta3.html"
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
// 1. Tìm nút Xem Ngay trong panel
    const watchButton = document.querySelector('#movie-info-panel .btn-primary');
    
    // 2. Gán đường dẫn từ data vào nút
    if (watchButton) {
        watchButton.href = movie.link; 
    }
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
// --- DỮ LIỆU ANIME ---
const animeRankData = [
    {
        id: 0,
        rank: 1,
        rankLabel: "🏆 TOP 1",
        title: "Attack on Titan",
        shortTitle: "Attack on Titan",
        views: "🔥 3.5M Views",
        rating: "⭐ 9.8",
        year: "2024",
        desc: "Trong cuộc chiến cuối cùng định đoạt số phận thế giới, Eren Yeager đã giải phóng sức mạnh tối thượng của các Titan. Dẫn đầu đội quân Titan Đại hình khổng lồ, Eren quyết tâm hủy diệt mọi kẻ thù đe dọa đến quê hương Eldia",
        videoId: "3xNH23QkNpk",
        img: "images/aot.jpg",
        link: "xp-aot.html"
    },
    {
        id: 1,
        rank: 2,
        rankLabel: "TOP 2",
        title: "Thanh Gươm Diệt Quỷ: Vô Hạn Thành",
        shortTitle: "Thanh Gươm Diệt Quỷ",
        views: "👁️ 2.9M Views",
        rating: "⭐ 9.6",
        year: "2025",
        desc: "Cuộc chiến cuối cùng bắt đầu! Tanjiro và Sát Quỷ Đoàn thâm nhập vào Vô Hạn Thành.",
        videoId: "rf0hW__Skow",
        img: "images/vohanthanh.jpg",
        link: "xp-demon.html"
    },
    {
        id: 2,
        rank: 3,
        rankLabel: "TOP 3",
        title: "Jujutsu Kaisen 0",
        shortTitle: "Jujutsu Kaisen 0",
        views: "👁️ 2.5M Views",
        rating: "⭐ 9.2",
        year: "2025",
        desc: "Nobita và Doraemon vô tình lạc vào một thế giới trung cổ tồn tại bên trong tranh.Chú Thuật Hồi Chiến 0",
        videoId: "8QkHWlrHqlE",
        img: "images/jujus.jpg",
        link: "xp-jujutsu.html"
    },
    {
        id: 3,
        rank: 4,
        rankLabel: "TOP 4",
        title: "Solo Leveling: Arise",
        shortTitle: "Solo Leveling",
        views: "👁️ 2.1M Views",
        rating: "⭐ 9.0",
        year: "2024",
        desc: "Sung Jin-woo tiếp tục hành trình thăng cấp điên cuồng tại các hầm ngục cấp S.",
        videoId: "OdQrlp3uYQM",
        img: "images/solo.jpg",
        link: "xp-solo.html"
    },
    {
        id: 4,
        rank: 5,
        rankLabel: "TOP 5",
        title: "My Hero Academia: Heroes Rising",
        shortTitle: "My Hero Academia: Heroes Rising",
        views: "👁️ 1.9M Views",
        rating: "⭐ 8.9",
        year: "2019",
        desc: "Tác giả đã giải thích rằng movie thứ hai này có thể được mô tả như một dạng kết của Boku no Hero Academia",
        videoId: "iaMLBWj6HjI",
        img: "images/heroacademia.jpg",
        link: "xp-hero.html"
    }
];
let currentKingIndex = 0;
function initAnimeRank() {
    renderInterface();
}

function renderInterface() {
    const kingData = animeRankData[currentKingIndex];
    
    document.getElementById('preview-rank').innerText = kingData.rankLabel;
    document.getElementById('preview-title').innerText = kingData.title;
    document.getElementById('preview-views').innerText = kingData.views;
    document.getElementById('preview-rating').innerText = kingData.rating;
    document.getElementById('preview-desc').innerText = kingData.desc;
    const iframeEl = document.getElementById('preview-video');
    const videoUrl = `https://www.youtube.com/embed/${kingData.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${kingData.videoId}`;
    
    iframeEl.src = videoUrl;
   // 1. Tìm nút Xem Ngay trong khu vực anime-king
    const watchButton = document.querySelector('.anime-king .btn-watch');

    // 2. Gán link từ dữ liệu vào nút
    if (watchButton) {
        watchButton.href = kingData.link;
    }
    const listContainer = document.getElementById('anime-list-container');
    listContainer.innerHTML = ''; 

    animeRankData.forEach((movie, index) => {
        if (index !== currentKingIndex) {
            let rankStyle = '';
            if (movie.rank === 1) rankStyle = 'color: #e50914; font-size: 20px; text-shadow: 0 0 10px red;';
            else if (movie.rank === 2) rankStyle = 'color: #00c2ff; font-size: 18px;';
            else if (movie.rank === 3) rankStyle = 'color: #ffc107; font-size: 18px;';

            const itemDiv = document.createElement('div');
            itemDiv.className = 'anime-item';
            itemDiv.onclick = () => selectAnime(index);
           itemDiv.innerHTML = `
                <div class="rank-badge" style="${rankStyle}">${movie.rank}</div>
                
                <img src="${movie.img}" class="thumb"> 
                
                <div class="item-info">
                    <h4>${movie.shortTitle}</h4>
                    <span>${movie.year} • ${movie.views.split(' ')[1]}</span>
                </div>
            `;
            listContainer.appendChild(itemDiv);
        }
    });
}
function selectAnime(index) {
    currentKingIndex = index;
    renderInterface();
}

// Gọi hàm khởi chạy ngay khi web load xong
document.addEventListener('DOMContentLoaded', initAnimeRank);

