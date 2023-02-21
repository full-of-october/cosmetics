
console.log('bootstrap', bootstrap)

const btn = document.querySelector('.js-burger')
const headerMain = document.querySelector('.header--absolute')

btn.addEventListener('click', function () {
  headerMain.classList.toggle('navbar--mobile')
})