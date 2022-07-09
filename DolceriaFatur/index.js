var slideUp = {
  distance: '150%',
  origin: 'bottom',
  opacity: 0,
  duration: 1000,
}

var images = {
  distance: '10%',
  origin: 'bottom',
  opacity: 0,
  duration: 1000,
}
ScrollReveal({ reset: true })

ScrollReveal().reveal('nav ', slideUp)
ScrollReveal().reveal('.title', slideUp)
ScrollReveal().reveal('.subtitle', { delay: 600 })
ScrollReveal().reveal('.card-image', images)
