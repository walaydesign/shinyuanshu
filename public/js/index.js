AOS.init({ startEvent: "load" });
window.addEventListener("load", AOS.refresh);

$(".header_item").click(function () {
  let target = $(this).data("target");
  let headerHeight = $(".header").height();
  var top = $(target).offset().top - headerHeight;
  $("html, body").animate({ scrollTop: top }, parseInt(300));
});

$(".btn-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
});

var swiperGarden = new Swiper(".garden_swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: "#garden-next",
    prevEl: "#garden-prev",
  },
  speed: 800,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "fade",
  allowTouchMove: false,
  fadeEffect: {
    crossFade: true,
  },
});

var swiperArrange = new Swiper(".arrange_swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: "#arrange-next",
    prevEl: "#arrange-prev",
  },
  speed: 800,
  pagination: {
    el: "#arrange-pagination",
    clickable: true,
  },
  effect: "fade",
  allowTouchMove: false,
  fadeEffect: {
    crossFade: true,
  },
});

var swiperArrangeInfo = new Swiper(".arrange_info_swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: "#arrange-next",
    prevEl: "#arrange-prev",
  },
  speed: 800,
  pagination: {
    el: "#arrange-pagination",
    clickable: true,
  },
  effect: "fade",
  allowTouchMove: false,
  fadeEffect: {
    crossFade: true,
  },
});

function sendEmail() {
  Email.send({
    SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
    To: "zhulixdesign@gmail.com, zhuli705098@gmail.com, a3202443aa@yahoo.com.tw, dtweryd@gmail.com",
    From: "walayydesign@gmail.com",
    Subject: "航綻甜心預約賞屋",
    Body:
      "姓名:" +
      document.getElementById("name").value +
      "<br>電話:" +
      document.getElementById("phone").value +
      "<br>需求房型:" +
      document.getElementById("type").value +
      "<br>聯繫內容:" +
      document.getElementById("content").value,
  }).then((message) => alert("感謝您的來信！我們很快就會和您聯繫！"));
}

$(window).on("resize", function () {
  mapResize();
});
mapResize();
function mapResize() {
  if ($(window).width() <= 991) {
    let mapWidth = $(".map_pic_inner").height() * 1.28;
    let windowWidth = $(window).width();
    let mapX = (mapWidth - windowWidth) / 2;
    $(".map_pic").animate({ scrollLeft: mapX });
  }
}

$(".arrange-floor").click(function () {
  let img = $(this).find("img").attr("src");
  let floor = $(this).find("p").text();
  $(".arrange-popup_main").find("img").attr("src", img);
  $(".arrange-popup_main").find("p").text(floor);
});




