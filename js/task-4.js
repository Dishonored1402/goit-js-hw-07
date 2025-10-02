const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = form.elements;
  const emailVal = email.value.trim();
  const passVal = password.value.trim();

  if (!emailVal || !passVal) {
    alert('All form fields must be filled in');
    return;
  }

  const data = { email: emailVal, password: passVal };
  console.log(data);

  form.reset();
});
