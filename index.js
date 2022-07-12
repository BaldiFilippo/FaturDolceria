var slideUp = {
  distance: '150%',
  origin: 'bottom',
  opacity: 0,
  duration: 1000,
}

ScrollReveal({ reset: true })

ScrollReveal().reveal('nav', slideUp)
ScrollReveal().reveal('footer', { delay: 100 })
ScrollReveal().reveal('.title', slideUp)
ScrollReveal().reveal('.subtitle', { delay: 600 })
ScrollReveal().reveal('.card-image', { delay: 100 })

const returnTopBtn = document.querySelector('.return-top-button')

//make it visible only when you scroll down
window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    returnTopBtn.classList.add('visible')
  } else {
    returnTopBtn.classList.remove('visible')
  }
})

returnTopBtn.addEventListener('click', () => {
  returnTopBtn.classList.remove('visible')

  window.scrollTo({ top: 0, behavior: 'smooth' })
})
