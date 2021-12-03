const form = document.querySelector('.add_form');

const submitForm = (e) => {
  e.preventDefault();
  console.log('Hello');
};

form.addEventListener('submit', submitForm);