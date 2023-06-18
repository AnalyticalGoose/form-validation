const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.modal-button')
const closemodalBtn = document.querySelector('.close-modal-button')
const passwordInput = document.getElementById('password')
const passwordConfInput = document.getElementById('confirm')
const validationContainer = document.querySelector('.pass-validation-container')
const emailInput = document.getElementById('email')
const postcodeInput = document.getElementById('postcode')
const submitBtn = document.querySelector('.submit-button')

modalBtn.addEventListener('click', () => {modal.showModal()})
closemodalBtn.addEventListener('click', () => {modal.close()})

emailInput.addEventListener('input', () => {
    const isValid = /^[^@]+@[^@.]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
    .test(emailInput.value);
    emailInput.setCustomValidity(isValid ? '' : 'invalid')
})

postcodeInput.addEventListener('blur', addSpaceToPostcode)

function addSpaceToPostcode() {
    const postcode = postcodeInput.value.trim();
    const updatedPostcode = postcode.replace(/^(.*[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]?)\s*([0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2})?$/, '$1 $2');
    postcodeInput.value = updatedPostcode;
}

passwordInput.addEventListener('focus', () => {
    validationContainer.classList.remove('hidden')
})

passwordInput.addEventListener('blur', () => {
    validationContainer.classList.add('hidden')
})

passwordInput.addEventListener('input', () => {
    validatePassword()
    checkPasswordsMatch()
})

passwordConfInput.addEventListener('input', () => {
    checkPasswordsMatch()
})

function validatePassword() {
    const lowerContainer = document.getElementById('validate-lower')
    const upperContainer = document.getElementById('validate-upper')
    const specialContainer = document.getElementById('validate-special')

    let containsLower = /[a-z]/.test(passwordInput.value)
    let containsUpper = /[A-Z]/.test(passwordInput.value)
    let containsSpecial = /[0-9`¬|!"£$€%^&*()\-_=+{}[\];:'@#~\\,<>./?]/.test(passwordInput.value)

    containsLower === true ? setPasswordHint(lowerContainer, "check", "add") : setPasswordHint(lowerContainer, "cross", "remove")
    containsUpper === true ? setPasswordHint(upperContainer, "check", "add") : setPasswordHint(upperContainer, "cross", "remove")
    containsSpecial === true ? setPasswordHint(specialContainer, "check", "add") : setPasswordHint(specialContainer, "cross", "remove")
}

function setPasswordHint(container, status, classStatus) {
    container.children[0].src = `./img/${status}.svg`
    classStatus === "add" ? container.children[1].classList.add('valid') : container.children[1].classList.remove('valid')
}

function checkPasswordsMatch() {
    if (passwordInput.value != passwordConfInput.value) {
        passwordConfInput.setCustomValidity("invalid")
    }
    else if (passwordInput.value === passwordConfInput.value) {
        passwordConfInput.setCustomValidity("")
    }
}
