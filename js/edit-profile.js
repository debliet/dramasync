const profileForm = document.querySelector(".profile-form");
const passwordForm = document.querySelector(".password-form");
const feedback = document.querySelector(".edit-feedback");

profileForm.addEventListener("submit", (event) => {
    event.preventDefault();

    feedback.textContent =
        "Esta é uma prévia: as alterações ainda não são salvas.";
});

passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newPassword = document.getElementById("new-password");
    const confirmPassword = document.getElementById("confirm-password");

    if (newPassword.value !== confirmPassword.value) {
        feedback.textContent = "As novas senhas precisam ser iguais.";
        confirmPassword.focus();
        return;
    }

    feedback.textContent =
        "Esta é uma prévia: a senha ainda não é alterada.";

    passwordForm.reset();
});