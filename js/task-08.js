const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(ev) {
  ev.preventDefault();

  const email = ev.currentTarget.elements.email.value.trim();
  const password = ev.currentTarget.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены");
    return;
  }

  const formData = { email, password };
  console.log(formData);
  form.reset();
}
