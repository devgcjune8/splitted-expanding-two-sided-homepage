const sideOne = document.querySelector('.one');
const sideTwo = document.querySelector('.two');
const cntnr = document.querySelector('.container');

sideOne.addEventListener('mouseenter', () => {
    cntnr.classList.add('hover-first')
})

sideOne.addEventListener('mouseleave', () => {
    cntnr.classList.remove('hover-first')
})

sideTwo.addEventListener('mouseenter', () => {
    cntnr.classList.add('hover-second')
})

sideTwo.addEventListener('mouseleave', () => {
    cntnr.classList.remove('hover-second')
})