const form = document.querySelector('.add_form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const priority = document.getElementById('priority');
const category = document.getElementById('category');
const tableContent = document.querySelector('.table_content');
const defaultRaw = document.getElementById('default_raw');

const submitForm = (e) => {
  //prevent default
  e.preventDefault();
  //validation
  if(title.value.length >= 1 && author.value.length >=3 && priority.value >=1 && priority.value <=5 && category.value) {
    //clear default raw 
    defaultRaw.innerHTML = '';
    //append tr to the table
    const row = document.createElement('tr');
    row.innerHTML = `<td>${title.value}</td><td>${author.value}</td><td>${priority.value}</td><td>${category.value}</td>`;
    tableContent.appendChild(row);
    //clear form fields
    title.value = '';
    author.value = '';
    priority.value = '';
    category.value = '';
  } else {
    alert('Please fill all the required fields!');
  }
};

form.addEventListener('submit', submitForm);