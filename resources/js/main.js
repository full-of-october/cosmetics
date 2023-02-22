
console.log('bootstrap', bootstrap)

const btn = document.querySelector('.js-burger')
const headerMain = document.querySelector('.header--absolute')

btn.addEventListener('click', function () {
  headerMain.classList.toggle('navbar--mobile')
})

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