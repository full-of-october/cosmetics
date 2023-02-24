
console.log('bootstrap', bootstrap)

const btn = document.querySelector('.js-burger')
const headerMain = document.querySelector('.header--absolute')
if (btn && headerMain) {
  btn.addEventListener('click', function () {
    headerMain.classList.toggle('navbar--mobile')
  })
}

$('.js-product-big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.js-product-thumb'
});

$('.js-product-thumb').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.js-product-big',
  dots: false,
  arrows: false,
  focusOnSelect: true
});

$('.js-recommendations-gallery').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  customPaging: 20,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// $(document).scroll(function (event) {
//   // document.querySelector("body") === $("body")
//   let scrollTop = $("body").scrollTop();
//   console.log(event)
//   let galleryBlock = $("#gallery").offset().top;
//   console.log('galleryBlock', galleryBlock)
//   // if(s_top > yes){
//   //     console.log("Yes");
//   // }
// });