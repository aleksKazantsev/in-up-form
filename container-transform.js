const formInUp = document.querySelector('.in-up-form')
const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')

//---Container transform---//
formInUp.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25
    let mainWidth = parseInt(getComputedStyle(formInUp).width, 10)
    if (mainWidth >= 900){
        formInUp.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    }
})

formInUp.addEventListener('mouseenter', (e) => {
    formInUp.style.transition = "all 0.2s ease"
})

formInUp.addEventListener('mouseleave', (e) => {
    formInUp.style.transition = "all 0.5s ease"
    formInUp.style.transform = `rotateY(0deg) rotateX(0deg)`
})

//---interface switch---//
signUpButton.addEventListener('click', () => {
	formInUp.classList.add("active")
})

signInButton.addEventListener('click', () => {
	formInUp.classList.remove("active")
})