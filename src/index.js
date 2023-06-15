const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.modal-button')
const closemodalBtn = document.querySelector('.close-modal-button')

const password = document.getElementById('password')
const passwordConfirm = document.getElementById('confirm')

const validationContainer = document.querySelector('.pass-validation-container')


modalBtn.addEventListener('click', () => {modal.showModal()})
closemodalBtn.addEventListener('click', () => {modal.close()})


password.addEventListener('focus', () => {
    validationContainer.classList.remove('hidden')
})

password.addEventListener('focusout', () => {
    validationContainer.classList.add('hidden')
})

password.addEventListener('input', () => {
    validatePassword()
})

let lower = false
let upper = false
let special = false

function validatePassword() {
    const lowerContainer = document.getElementById('validate-lower')
    const upperContainer = document.getElementById('validate-upper')
    const specialContainer = document.getElementById('validate-special')

    let containsLower = /[a-z]/.test(password.value)
    let containsUpper = /[A-Z]/.test(password.value)
    let containsSpecial = /[0-9`¬|!"£$€%^&*()\-_=+{}[\];:'@#~\\,<>./?]/.test(password.value)

    if (containsLower!= lower) {
        if (containsLower == true) {
            lowerContainer.children[0].src = "./img/check.svg"
            lowerContainer.children[1].classList.add('valid')
            lower = true
        }
        else {
            lowerContainer.children[0].src = "./img/cross.svg"
            lowerContainer.children[1].classList.remove('valid')
            lower = false
        }
    }
    else if (containsUpper != upper) {
        if (containsUpper == true) {
            upperContainer.children[0].src = "./img/check.svg"
            upperContainer.children[1].classList.add('valid')
            upper = true
        }
        else {
            upperContainer.children[0].src = "./img/cross.svg"
            upperContainer.children[1].classList.remove('valid')
            upper = false
        }
    }
    else if (containsSpecial != special) {
        if (containsSpecial == true) {
            specialContainer.children[0].src = "./img/check.svg"
            specialContainer.children[1].classList.add('valid')
            special = true
        }
        else {
            specialContainer.children[0].src = "./img/cross.svg"
            specialContainer.children[1].classList.remove('valid')
            special = false
        }
    }
}
