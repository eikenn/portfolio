const button = document.querySelector('#mobile-menu-btn')
const mobileMenu = document.querySelector('#mobile-menu')
const logo = document.querySelector('#navbar-logo')

const clickButton = () => {
    const style = getComputedStyle(mobileMenu)
    if(style.display === 'none') {
        mobileMenu.style.display = 'flex'
    } else {
        mobileMenu.style.display = 'none'
    }
}

const closeMenu = () => {
    mobileMenu.style.display = 'none'
}

button.addEventListener('click', clickButton)

mobileMenu.addEventListener('click', closeMenu)
logo.addEventListener('click', closeMenu)