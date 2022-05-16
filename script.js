const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
email.addEventListener('input', () => {
  email.setCustomValidity('');
  email.checkValidity();
});

email.addEventListener('invalid', () => {
  if (email.validity.valueMissing) {
    email.setCustomValidity('I am expecting an e-mail address');
  } else if (email.validity.tooShort) {
    email.setCustomValidity('Too Short!');
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity('Needs to be a valid email address');
  }
});

const country = document.getElementById('country');

country.addEventListener('input', () => {
  country.setCustomValidity('');
  country.checkValidity();
});

country.addEventListener('invalid', () => {
  if (country.validity.valueMissing) {
    country.setCustomValidity('Enter a Country');
  } else if (country.validity.tooShort) {
    country.setCustomValidity('Enter a Valid Country');
  }
});

const zipcode = document.getElementById('zipcode');

zipcode.addEventListener('input', () => {
  zipcode.setCustomValidity('');
  zipcode.checkValidity();
});

zipcode.addEventListener('invalid', () => {
  if (zipcode.length != 6) {
    zipcode.setCustomValidity('Enter a six digit zip code');
  }
});

//disables space key when user types
zipcode.onkeydown = (e) => {
  if (e.which === 32) return false;
};

const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

password2.addEventListener('input', () => {
  password2.setCustomValidity('');
});

const checkPasswords = () => {
  if (password2.value !== password1.value) {
    password2.setCustomValidity('Passwords do not match');
    return true;
  } else if (password2.validity.tooShort || password1.validity.tooShort) {
    password2.setCustomValidity('Too Short');
    return true;
  } else if (password2.value.length == 0 || password1.value.length == 0) {
    password2.setCustomValidity('Enter a password');
    return true;
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //if one input is invalid, run the validity report.
  if (
    !email.validity.valid ||
    !country.validity.valid ||
    !zipcode.validity.valid ||
    checkPasswords()
  ) {
    e.preventDefault();
    email.reportValidity();
    country.reportValidity();
    zipcode.reportValidity();
    password2.reportValidity();
  } else {
    e.preventDefault();
    alert('high five');
  }
});
