const form = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const dialog = document.getElementById("success-dialog");
const emailDisplay = document.getElementById("user-email");
const closeDialog = document.getElementById("close-dialog");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const email = emailInput.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!validEmail.test(email)) {
    errorMessage.textContent = "Please enter the valid email";
    emailInput.style.borderColor = "#ff6a6a";
    return;
  }

  errorMessage.textContent = "";
  emailInput.style.borderColor = "#ccc";

  emailDisplay.textContent = email;
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});
