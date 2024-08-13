//___________sidebar______________

const burger = document.getElementById('burger')
const sidebar = document.querySelector('.sidebar')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    if (burger.classList.contains('active')) {
        sidebar.classList.add('show')
        body.classList.add('body__overflow--hidden')
    } else {
        closesidebar ()

    }
})

document.addEventListener('click', (event) => {
    const clickOnsidebar = sidebar.contains(event.target)
    const clickOnBurger = burger.contains(event.target)
    if (!clickOnsidebar && !clickOnBurger) {
        closesidebar ()
    }
})

sidebar.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
        closesidebar ()
    }
})

function resize () {
    const screenWidth = window.innerWidth
    if (screenWidth > 1199) {
        closesidebar ()
    }
}
window.addEventListener('resize', resize)
resize()

function closesidebar () {
    sidebar.classList.remove('show')
    body.classList.remove('body__overflow--hidden')
    burger.classList.remove('active')
}

//___________nav_list______________

const listItems = document.querySelectorAll('.sidebar__list-item')

listItems[0].addEventListener('click', () => {
    listItems.forEach(item => item.classList.remove('sidebar__list-item--selected'))
    // window.location.href = 'index.html'
    closesidebar()
})

listItems.forEach((item, index) => {
    if (index !== 0) {
        item.addEventListener('click', (event) => {
            listItems.forEach(i => i.classList.remove('sidebar__list-item--selected'))
            item.classList.add('sidebar__list-item--selected')
            event.stopPropagation()
        })
    }
})

document.addEventListener('click', () => {
    listItems.forEach(item => {
        item.classList.remove('sidebar__list-item--selected')
    })
})

//___________footer_pagination______________

const footerItems = document.querySelectorAll('.content__footer-item')
const prevButton = document.querySelector('.content__footer-prev')
const nextButton = document.querySelector('.content__footer-next')

footerItems.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('content__footer-item--drops')) {
            footerItems.forEach(item => item.classList.remove('content__footer-item--active'))
            item.classList.add('content__footer-item--active')
        }
    })
})

prevButton.addEventListener('click', () => {
    footerItems.forEach(item => item.classList.remove('content__footer-item--active'))
})

nextButton.addEventListener('click', () => {
    footerItems.forEach(item => item.classList.remove('content__footer-item--active'))
})

//___________animation______________

const title = document.querySelector('.content__title')
const content = document.querySelector('.content__container')
const navList = document.querySelectorAll('.sidebar__list-item')

setTimeout(() => title.classList.add('active'), 200)
setTimeout(() => content.classList.add('active'), 300)
setTimeout(() => sidebar.classList.add('active'), 300)

for (let i = 0; i < navList.length; i++) {
    setTimeout(() => {
        navList[i].classList.add('active')

        navList[i].addEventListener('transitionend', function changeTransition() {
            navList[i].classList.add('fast-transition')
            navList[i].removeEventListener('transitionend', changeTransition)
        })
    }, 400 + i * 100)
}

sidebar.addEventListener('transitionend', function changeTransition() {
    sidebar.classList.add('fast-transition')
    sidebar.removeEventListener('transitionend', changeTransition)
})

title.addEventListener('transitionend', function changeTransition() {
    title.classList.add('fast-transition')
    title.removeEventListener('transitionend', changeTransition)
})

content.addEventListener('transitionend', function changeTransition() {
    content.classList.add('fast-transition')
    content.removeEventListener('transitionend', changeTransition)
})
