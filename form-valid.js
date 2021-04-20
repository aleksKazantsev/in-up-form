//---error / success alert---//
function alertError(input, strong) {
    const length = input.parentNode.getElementsByTagName('strong').length
    const removeStrong = input.parentNode.getElementsByTagName('strong')[0]
    if (length) input.parentNode.removeChild(removeStrong)
    input.parentNode.appendChild(strong)
    input.parentNode.classList.remove('success-input')

    input.parentNode.classList.add('error-input')
}

function alertSuccess(input, strong) {
    const length = input.parentNode.getElementsByTagName('strong').length
    const removeStrong = input.parentNode.getElementsByTagName('strong')[0]
    if (length) {
        if (removeStrong.innerText == strong.innerText) {
            input.parentNode.removeChild(removeStrong)
            input.parentNode.classList.remove('error-input')
        }
    }
    input.parentNode.classList.add('success-input')
}

//---Requred valid---//
function isRequred(input) {
    const value = input.value
    const strong = document.createElement('strong')
    strong.innerText = 'поле не заполненно!'
    if (!value) {
        alertError(input, strong)
        return false
    }else {
        alertSuccess(input, strong)
    }
    return true
}

//---Len valid---//
function isLen(input, len = 4) {
    const value = input.value
    const strong = document.createElement('strong')
    strong.innerText = `количество символов меньше ${len}!`
    if (value.length < len) {
        alertError(input, strong)
        return false
    }else {
        alertSuccess(input, strong)
    }
    return true

}

//---Firs symbol number valid---//
function isNoFirstNumber(input) {
    const value = input.value
    const strong = document.createElement('strong')
    strong.innerText = 'первый символ число!'
    if (parseInt(value[0], 10)) {
        alertError(input, strong)
        return false
    }else {
        alertSuccess(input, strong)
    }
    return true
}

//---Firs symbol + valid---//
function isNoFirstPlus(input) {
    const value = input.value
    const strong = document.createElement('strong')
    strong.innerText = 'первый символ +!'
    if (value[0] == '+') {
        alertError(input, strong)
        return false
    }else {
        alertSuccess(input, strong)
    }
    return true
}

//---Symbol @ valid---//
function isNoDog(input) {
    const value = input.value
    const strong = document.createElement('strong')
    strong.innerText = 'недопустимый символ @'
    if (value.includes('@')) {
        alertError(input, strong)
        return false
    }else {
        alertSuccess(input, strong)
    }
    return true
}

//---Email valid---//
function isEmail(email) {
    const value = email.value
    const regex = new RegExp('\\b[0-9a-z]{4,15}@[a-z]{2,6}\\.[a-z]{2,6}\\b')
    const strong = document.createElement('strong')
    strong.innerText = 'значение не соответствует email'
    if (value.match(regex)) {
        alertSuccess(email, strong)
        return true
    }
    alertError(email, strong)
    return false
}

//---Eye alert---//
function eyeAlert(input, alert='error'){
    eye = input.parentNode.querySelector('span[password-eye]')
    if (alert=='success') {
        if (eye.classList.contains('icon-eye-error')) {
            eye.classList.remove('icon-eye-error')
            eye.classList.add('icon-eye-success')
            return
        }else if (eye.classList.contains('icon-eye-slash')) {
            eye.classList.remove('icon-eye-slash')
            eye.classList.add('icon-eye-slash-success')
            return
        }else if (eye.classList.contains('icon-eye-slash-error')) {
            eye.classList.remove('icon-eye-slash-error')
            eye.classList.add('icon-eye-slash-success')
            return
        }
        eye.classList.add('icon-eye-success')
        return
    }else {
        if (eye.classList.contains('icon-eye-success')) {
            eye.classList.remove('icon-eye-success')
            eye.classList.add('icon-eye-error')
            return
        }else if (eye.classList.contains('icon-eye-slash')) {
            eye.classList.remove('icon-eye-slash')
            eye.classList.add('icon-eye-slash-error')
            return
        }else if (eye.classList.contains('icon-eye-slash-success')) {
            eye.classList.remove('icon-eye-slash-success')
            eye.classList.add('icon-eye-slash-error')
            return
        }
        eye.classList.add('icon-eye-error')
        return
    }
}

//---Eye switch---//
onSwitchEye = (e) => {
    passwordInput = e.target.parentNode.querySelector('input[password-input], input[password2-input]')
    eyeClassList = e.target.classList

    if(passwordInput.type == 'password') {
        passwordInput.type = 'text'
    }else {
        passwordInput.type = 'password'
    }

    if (eyeClassList.contains('icon-eye-slash')) {
        eyeClassList.remove('icon-eye-slash')
    }else if (eyeClassList.contains('icon-eye-error')){
        eyeClassList.remove('icon-eye-error')
        eyeClassList.add('icon-eye-slash-error')
    }else if (eyeClassList.contains('icon-eye-slash-error')){
        eyeClassList.remove('icon-eye-slash-error')
        eyeClassList.add('icon-eye-error')
    }else if (eyeClassList.contains('icon-eye-success')){
        eyeClassList.remove('icon-eye-success')
        eyeClassList.add('icon-eye-slash-success')
    }else if (eyeClassList.contains('icon-eye-slash-success')){
        eyeClassList.remove('icon-eye-slash-success')
        eyeClassList.add('icon-eye-success')
    }else if (eyeClassList.contains('icon-eye')) {
        eyeClassList.add('icon-eye-slash')
    }
    
}

//---Inputs valid---//
function isInputsValid(inputContainers) {
    for (let container of inputContainers) {
        if(!container.classList.contains('success-input')) return false
    }
    return true
}

//---Submit alert---//
function submitAlert(inputContainers, submit) {
    if (isInputsValid(inputContainers)) {
        submit.classList.remove('error-login')
        submit.classList.add('success-all')
    }else {
        submit.classList.remove('success-all')
        submit.classList.add('error-login')
    }
}

//---Submit valid---//
function submitValid(input) {
    fieldset = input.parentNode.parentNode
    inputContainers = fieldset.querySelectorAll('div[input-container]')
    submit = fieldset.parentNode.querySelector('button[button-submit]')
    submitAlert(inputContainers, submit)
}

//---Name valid---//
onNameImput = (e) => {
    input = e.target
    if(isRequred(input) && isNoFirstNumber(input) && isNoFirstPlus(input) && isNoDog(input) && isLen(input)) {
        input.parentNode.classList.remove('icon-person-error')
        input.parentNode.classList.add('icon-person-success')
    }else {
        input.parentNode.classList.remove('icon-person-success')
        input.parentNode.classList.add('icon-person-error')
    }
    submitValid(input)
}

//---Password valid---//
onPasswordInput = (e) => {
    input = e.target
    if(isRequred(input) && isLen(input)) {
        input.parentNode.classList.remove('icon-lock-error')
        input.parentNode.classList.add('icon-lock-success')
        eyeAlert(input, 'success')
    }else {
        input.parentNode.classList.remove('icon-lock-success')
        input.parentNode.classList.add('icon-lock-error')
        eyeAlert(input)
    }
    submitValid(input)
    
    
    const password2 = input.parentNode.parentNode.querySelector('input[password2-input]')
    if(!password2) return
    const eventFocusOut = new Event('focusout')
    password2.dispatchEvent(eventFocusOut)

}

//---Password 2 valid---//
onPassword2Input = (e) => {
    const password2 = e.target
    const password1 = password2.parentNode.parentNode.querySelector('input[password-input]')
    const strong = document.createElement('strong')
    strong.innerText = 'пароли не совпадают!'
    if (password2.value == password1.value) {
        password2.parentNode.classList.remove('icon-lock-error')
        password2.parentNode.classList.add('icon-lock-success')
        eyeAlert(password2, 'success')
        alertSuccess(password2, strong)
    }else {
        password2.parentNode.classList.remove('icon-lock-success')
        password2.parentNode.classList.add('icon-lock-error')
        eyeAlert(password2)
        alertError(password2, strong)
    }
    submitValid(password2)
}

//---Email valid---//
onEmailInput = (e) => {
    email = e.target
    if(isRequred(email) && isLen(email) && isEmail(email)) {
        email.parentNode.classList.remove('icon-envelope-error')
        email.parentNode.classList.add('icon-envelope-success')
    }else {
        email.parentNode.classList.remove('icon-envelope-success')
        email.parentNode.classList.add('icon-envelope-error')
    }
    submitValid(email)
    
}

//---Submit valid---//
onSubmitButton = (e) => {
    e.preventDefault()
    const form = e.target
    const inputContainers = form.querySelectorAll('div[input-container]')
    const button = form.querySelector('button')
    const eventFocusOut = new Event('focusout')

    for(let inputContainer of inputContainers) {
        if(inputContainer.querySelector('input[name-input]')) inputContainer.querySelector('input[name-input]').dispatchEvent(eventFocusOut)
        if(inputContainer.querySelector('input[password-input]')) inputContainer.querySelector('input[password-input]').dispatchEvent(eventFocusOut)
        if(inputContainer.querySelector('input[email-input]')) inputContainer.querySelector('input[email-input]').dispatchEvent(eventFocusOut)
    }
    submitAlert(inputContainers, button)

    if(button.classList.contains('success-all')){
        const formData = new FormData(form)
        let data = {}

        for(let [key, prop] of formData) {
            data[key] = prop
        }

        data = JSON.stringify(data, null, 2)
        console.log(data)
    }
}

//---Events---//
document.addEventListener('DOMContentLoaded', () => {
    const nameInputs = document.querySelectorAll('input[name-input]')
    const passwordInputs = document.querySelectorAll('input[password-input]')
    const password2Inputs = document.querySelectorAll('input[password2-input]')
    const passwordEyes = document.querySelectorAll('span[password-eye]')
    const emailInputs = document.querySelectorAll('input[email-input]')
    const forms = document.querySelectorAll('form')

    for(let nameInput of nameInputs) {
        nameInput.addEventListener('focusout', onNameImput)
        nameInput.addEventListener('input', onNameImput)
    }

    for(let passwordInput of passwordInputs) {
        passwordInput.addEventListener('focusout', onPasswordInput)
        passwordInput.addEventListener('input', onPasswordInput)
    }

    for(let passwordInput of password2Inputs) {
        passwordInput.addEventListener('focusout', onPassword2Input)
        passwordInput.addEventListener('input', onPassword2Input)
    }

    for(let passwordEye of passwordEyes) {
        passwordEye.addEventListener('click', onSwitchEye)
    }

    for(let emailInput of emailInputs) {
        emailInput.addEventListener('focusout', onEmailInput)
        emailInput.addEventListener('input', onEmailInput)
    }

    for (let form of forms) {
        form.addEventListener('submit', onSubmitButton)
    }
})