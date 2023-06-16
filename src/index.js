const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.modal-button')
const closemodalBtn = document.querySelector('.close-modal-button')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('confirm')
const validationContainer = document.querySelector('.pass-validation-container')

// to-do - eye to view passwords
//       - more robust email regex
//       - form submission

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
    checkPasswordsMatch()
})

passwordConfirm.addEventListener('input', () => {
    checkPasswordsMatch()
})

function validatePassword() {
    const lowerContainer = document.getElementById('validate-lower')
    const upperContainer = document.getElementById('validate-upper')
    const specialContainer = document.getElementById('validate-special')

    let containsLower = /[a-z]/.test(password.value)
    let containsUpper = /[A-Z]/.test(password.value)
    let containsSpecial = /[0-9`¬|!"£$€%^&*()\-_=+{}[\];:'@#~\\,<>./?]/.test(password.value)

    containsLower === true ? setPasswordHint(lowerContainer, "check", "add") : setPasswordHint(lowerContainer, "cross", "remove")
    containsUpper === true ? setPasswordHint(upperContainer, "check", "add") : setPasswordHint(upperContainer, "cross", "remove")
    containsSpecial === true ? setPasswordHint(specialContainer, "check", "add") : setPasswordHint(specialContainer, "cross", "remove")
}

function setPasswordHint(container, status, classStatus) {
    container.children[0].src = `./img/${status}.svg`
    classStatus === "add" ? container.children[1].classList.add('valid') : container.children[1].classList.remove('valid')
}

function checkPasswordsMatch() {
    if (password.value != passwordConfirm.value) {
        passwordConfirm.setCustomValidity("invalid")
    }
    else if (password.value === passwordConfirm.value) {
        passwordConfirm.setCustomValidity("")
    }
}
