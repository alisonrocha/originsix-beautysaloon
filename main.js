// Abre e fecha o menu quando clinar no icone: hamburguer e x

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

//O Evento toogle troca as classes
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Quando eu clicar em um item do menu, esconder o menu

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// mudar o header da página quando der scroll
function changeHeaderWhenScroll() {
  let header = document.querySelector('#header')
  let navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

//Botão voltar para o topo
function backToTop() {
  let backToTopbutton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopbutton.classList.add('show')
  } else {
    backToTopbutton.classList.remove('show')
  }
}

//Testimonials carousel slider swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//ScrollReaveal: Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Menu ativo conforme seção visivel na página */

const sections = document.querySelectorAll('main section[id]')

function activeMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//When Scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activeMenuAtCurrentSection()
})
