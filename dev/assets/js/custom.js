    //___________header______________

const burger = document.getElementById('burger')
const menu = document.querySelector('.sidebar')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    if (burger.classList.contains('active')) {
        menu.classList.add('show')
        body.classList.add('overflow_hidden')
    } else {
        closeMenu ()

    }
})

document.addEventListener('click', (event) => {
    const clickOnMenu = menu.contains(event.target)
    const clickOnBurger = burger.contains(event.target)
    if (!clickOnMenu && !clickOnBurger) {
        closeMenu ()
    }
})

menu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
        closeMenu ()
    }
})

function resize () {
    const screenWidth = window.innerWidth
    if (screenWidth > 1199) {
        closeMenu ()
    }
}
window.addEventListener('resize', resize)
resize()

function closeMenu () {
    menu.classList.remove('show')
    body.classList.remove('overflow_hidden')
    burger.classList.remove('active')
}