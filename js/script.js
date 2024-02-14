const button = document.querySelector('#mobile-btn');
const mobileLinks = document.querySelector('#mobile-links');

const clickButton = () => {
    const style = getComputedStyle(mobileLinks)
    if(style.display === 'none') {
        mobileLinks.style.display = 'flex'
    } else {
        mobileLinks.style.display = 'none'
    }
}

const closeMenu = () => {
    mobileLinks.style.display = 'none'
}

button.addEventListener('click', clickButton)
mobileLinks.addEventListener('click', closeMenu)