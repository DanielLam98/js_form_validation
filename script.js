const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');

email.addEventListener('input', (e) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('I am expecting an e-mail address!');
    email.reportValidity();
  } else {
    email.setCustomValidity('');
  }
});
