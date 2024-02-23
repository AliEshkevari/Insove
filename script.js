const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})


document.addEventListener('DOMContentLoaded', function () {
  const faqs = document.querySelectorAll('.questions');

  faqs.forEach((item) => {
    const faqBtn = item.querySelector('.faqBtn');
    const answerDiv = item.querySelector('.answer');

    faqBtn.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      const iconElem = faqBtn.querySelector('i');
      if (isOpen) {
        // Show this answer and hide others
        faqs.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
            otherItem.querySelector('.answer').classList.add('h-0', 'overflow-hidden');
            otherItem.querySelector('i').className = 'fa fa-plus';
          }
        });
        answerDiv.classList.remove('h-0', 'overflow-hidden');
        iconElem.className = 'fa fa-minus';
      } else {
        // Hide this answer when closing
        answerDiv.classList.add('h-0', 'overflow-hidden');
        iconElem.className = 'fa fa-plus';
      }
    });
  });
});





const links = document.querySelectorAll('.department-links')
const contexts = document.querySelectorAll('.department-context')

function changeColor(index) {
  for (let i = 0; i < links.length; i++) {
    if (i == index) {
      links[i].style.color = '#1cbccf'
    }
    else {
      links[i].style.color = '#9ab4b7'
    }
  }
}

function changeContext(dep) {
  for (let i = 0; i < contexts.length; i++) {
    contexts[i].classList.remove('fade-in')
    contexts[i].style.display = 'none'
  }
  document.getElementById(dep + '-info').style.display = 'flex'
  document.getElementById(dep + '-info').offsetWidth
  document.getElementById(dep + '-info').classList.add('fade-in')
}




let desktopMenu = document.getElementById('desktop-menu')

let sticky = desktopMenu.offsetTop

function holdTop() {
  if (window.scrollY > sticky) {
    desktopMenu.classList.remove('absolute')
    desktopMenu.classList.remove('min-[836px]:top-[150px]')
    desktopMenu.classList.add('fixed')
    desktopMenu.classList.add('left-0')
    desktopMenu.classList.add('right-0')
    desktopMenu.classList.add('mx-auto')
    desktopMenu.classList.add('min-[836px]:top-2')
  }
  else {
    desktopMenu.classList.remove('fixed')
    desktopMenu.classList.remove('min-[836px]:top-2')
    desktopMenu.classList.add('min-[836px]:top-[150px]')
    desktopMenu.classList.add('absolute')
  }
}

window.onscroll = function () {
  holdTop()
}



const menu = document.getElementById('mobile-menu')
const openMenuBtn = document.getElementById('open-menu-btn')
const closeMenuBtn = document.getElementById('close-menu-btn')

function toggleMenu() {
  menu.classList.toggle('translate-x-0')
  menu.classList.toggle('translate-x-[370px]')
  menu.classList.toggle('min-[460px]:translate-x-[670px]')
  menu.classList.toggle('translate-x-2')
}

openMenuBtn.addEventListener('click', toggleMenu)
closeMenuBtn.addEventListener('click', toggleMenu)





const searchInput = document.getElementById('search-input')
const searchIcon = document.getElementById('search-icon')
searchIcon.addEventListener('click', () => {
  searchInput.value = ''
})


const desktopSearchInput = document.getElementById('desktop-search-input')
const desktopSearchIcon = document.getElementById('desktop-search-icon')
desktopSearchIcon.addEventListener('click', () => {
  desktopSearchInput.value = ''
})




function updateActiveMenuItem() {
  const sections = document.querySelectorAll('section')
  const navItems = document.querySelectorAll('#desktop-menu .menu-item a')

  sections.forEach(section => {
    const top = section.offsetTop
    const height = section.clientHeight
    if (window.pageYOffset >= top && window.pageYOffset < top + height) {
      navItems.forEach(item => {
        item.style.color = ''
      });
      const correspondingMenuItem = document.querySelector(`#desktop-menu .menu-item a[href="#${section.id}"]`)
      if (correspondingMenuItem) {
        correspondingMenuItem.style.color = '#1CBCCF'
      }
    }
  });
}


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  section.scrollIntoView({ behavior: 'smooth' })
}

// Listen for scroll events
window.addEventListener('scroll', updateActiveMenuItem)


















const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 100,
})


sr.reveal('.hero-left-part', { origin: 'top' })
sr.reveal('.hero-right-part')
sr.reveal('.statistics-container', {
  interval: 100,
  origin: 'top'
})
sr.reveal('.services-container')
sr.reveal('.service', {
  distance: '100px',
  interval: 100,
  origin: 'bottom'
})
sr.reveal('.reservation-title', {
  origin: 'left'
})
sr.reveal('.customers-container')
sr.reveal('.doctors-title', {
  origin: 'right'
})
sr.reveal('.doctors-container')
sr.reveal('.answer-header', {
  origin: 'left'
})
sr.reveal('.questions', {
  interval: 100,
  origin: 'bottom'
})
sr.reveal('.department-link', {
  origin: 'left',
  duration: 2000,
  interval: 50
})
sr.reveal('.department-right', {
  origin: 'right',
  duration: 2000
})
sr.reveal('.blog-header', {
  origin: 'left',
  duration: 2000
})
sr.reveal('.post', {
  duration: 1500,
  delay: 0,
  interval: 100
})
sr.reveal('.brand-1', {
  duration: 1800,
  delay: 0
})
sr.reveal('.brand-2', {
  duration: 1800,
  origin: 'top',
  delay: 0
})
sr.reveal('.brand-3', {
  duration: 1800,
  delay: 0
})
sr.reveal('.brand-4', {
  duration: 1800,
  origin: 'top',
  delay: 0
})
sr.reveal('.brand-5', {
  duration: 1800,
  delay: 0
})
sr.reveal('.newsletter-left', {
  duration: 1200,
  origin: 'left',
})
sr.reveal('.newsletter-right', {
  duration: 1200,
  delay: 300,
  origin: 'right'
})