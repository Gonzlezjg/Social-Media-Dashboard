const checkbox = document.querySelector('#checkbox')

if(window.matchMedia('prefers-color-scheme: dark').matches){
    checkbox.setAttribute('checked', true)
}
checkbox.addEventListener ('change', function (event) {

    if (this.checked) {
        document.body.classList.remove('theme-light-mode')
        document.body.classList.add('theme-dark-mode')
        
    } else {
        document.body.classList.add('theme-light-mode')
        document.body.classList.remove('theme-dark-mode')
    }
})
console.log("hola") 