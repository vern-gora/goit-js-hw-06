const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", handlerSub);

function handlerSub(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  event.target.reset();
}
