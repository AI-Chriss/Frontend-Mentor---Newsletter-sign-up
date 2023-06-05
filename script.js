const formBtn = document.querySelector("#subscribe-button");
const succedMsg = document.querySelector(".sign-up-pop-up");
const signUpCard = document.querySelector(".sign-up-card");
const input = document.getElementById("e-mail");
const errorLabel = document.querySelector(".error-form__label");

function validateForm() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
        succedMsg.style.display = "flex";
        signUpCard.style.display = "none";
    } else {
        errorAlert();
    }
}

function errorAlert() {
    input.style.borderColor = "hsl(4, 100%, 67%)";
    input.style.background = "hsl(4, 100%, 96%)";
    input.style.color = "hsl(4, 100%, 67%)";
    errorLabel.style.color = "hsl(4, 100%, 67%)";
    errorLabel.style.display = "flex";
}

formBtn.addEventListener("click", validateForm);

