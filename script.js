const form = document.querySelector("#form")
const userInp = document.querySelector("#username")
const passInp = document.querySelector("#password")
const passConfInp = document.querySelector("#password-conf")
const termsInp = document.querySelector("#terms")
const errorsContainer = document.querySelector(".errors")
const errorsList = document.querySelector(".errors-list")

form.addEventListener('submit', e => {

    const errorMessages = []
    clearErrors()

    if (userInp.value.length < 6) {
        errorMessages.push("Username must be atleast 6 characters...")
    }

    if (passInp.value.length < 8) {
        errorMessages.push("Password must be atleast 8 characters")
    }

    if (passConfInp.value !== passInp.value) {
        errorMessages.push("Passwords must match")
    }

    if (!termsInp.checked) {
        errorMessages.push("You must check the terms and conditions")
    }


    if (errorMessages.length > 0) {
        showErrors(errorMessages)
        e.preventDefault()
    }


})


function clearErrors() {
    errorsList.innerHTML = ""
}


function showErrors(errorMessages) {
    errorMessages.forEach(errorMessage => {
        const li = document.createElement('li')
        li.innerText = errorMessage
        errorsList.appendChild(li)
    });
    errorsContainer.classList.add("show")
}

