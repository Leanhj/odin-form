const submit = document.querySelector(".submit");
const form = document.querySelector("form");
const passError = document.createElement("div");
passError.id = "pass-error";
passError.textContent = "* Passwords do not match";

submit.addEventListener("click", () => {
    let password = document.querySelector("#password").value;
    let passCheck = document.querySelector("#password-confirm").value;
    if (password === passCheck) {
        password.className = "none";
        passCheck.className = "none";
        passError.remove();
    } else {
        password.className = "error";
        passCheck.className = "error";
        form.insertBefore(passError, submit);
    }
});