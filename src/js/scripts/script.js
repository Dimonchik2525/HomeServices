let inp = document.querySelector('.footer__newsletter__form__input')
console.log(inp.placeholder)
window.addEventListener('resize', function (e) {
   console.log(document.documentElement.clientWidth);

   if (document.documentElement.clientWidth < 1042) {
      inp.placeholder = 'email address'
   }
   else {
      inp.placeholder = 'Enter email address'
   }
})
window.addEventListener('load', function (e) {
   console.log(document.documentElement.clientWidth);

   if (document.documentElement.clientWidth < 1042) {
      inp.placeholder = 'email address'
   }
   else {
      inp.placeholder = 'Enter email address'
   }
})

let footer = document.querySelector('.footer__newsletter__text')
console.log(footer.nextElementSibling)
console.log(footer.textContent)
