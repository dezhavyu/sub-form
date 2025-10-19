document.getElementById("subscribe-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const errorMessage = document.getElementById("error-message");

  // Регулярний вираз для валідації email
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!regex.test(email)) {
    errorMessage.textContent = "Будь ласка, введіть коректну адресу email.";
    emailInput.classList.add("error");
    return;
  }

  // Якщо успішна валідація
  errorMessage.textContent = "";
  document.getElementById("subscribe-section").style.display = "none";

  const dialog = document.getElementById("success-dialog");
  document.getElementById("user-email").textContent = email;
  dialog.showModal();

  document.getElementById("close-dialog").addEventListener("click", () => {
    dialog.close();
    document.getElementById("subscribe-section").style.display = "block";
    emailInput.value = "";
  });
});
