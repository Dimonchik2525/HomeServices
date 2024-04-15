

let inp = document.querySelector('.footer__newsletter__form__input')
//console.log(inp.placeholder)
window.addEventListener('resize', function (e) {
   //console.log(document.documentElement.clientWidth);

   if (document.documentElement.clientWidth < 1042) {
      inp.placeholder = 'email address'
   }
   else {
      inp.placeholder = 'Enter email address'
   }
})
window.addEventListener('load', function (e) {
   //console.log(document.documentElement.clientWidth);

   if (document.documentElement.clientWidth < 1042) {
      inp.placeholder = 'email address'
   }
   else {
      inp.placeholder = 'Enter email address'
   }
})


window.addEventListener('scroll', function (e) {
   let headerItems = document.querySelectorAll('.menu__link')
   let watchItems = Array.from(document.querySelectorAll('[data-watch]')).filter(element => element.getAttribute('data-watch').trim() !== '');
   //console.log(watchItems)
   for (let i = 0; i < headerItems.length; i++) {
      if (headerItems[i].getAttribute('data-goto') == watchItems[i].getAttribute('data-watch') && watchItems[i].classList.contains('_watcher-view')) {
         headerItems[i].classList.add('td')
      }
      else {
         headerItems[i].classList.remove('td')
      }
      console.log(watchItems[i].classList.contains('_watcher-view'));
   }
})

