const toggle = document.querySelector('.toggle')
const html = document.querySelector('html')

var a = 0

toggle.addEventListener('click',() => {
    ++a
    if (a % 2 === 0) {
        html.classList.remove('dark')
        html.classList.add('light')
        toggle.innerHTML = 'Dark'
    } else {
        html.classList.remove('light')
        html.classList.add('dark')
        toggle.innerHTML = 'Lighting'
    }
    console.log(a)

})