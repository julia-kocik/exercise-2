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
    //save in local storage
    localStorage.clear();
    const formArr = [title.value, author.value, priority.value, category.value];
    localStorage.setItem(title.value, formArr);
    console.log(localStorage);
    for(let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const splitArr = value.split(',');
      //append tr to the table
      const row = document.createElement('tr');
      row.innerHTML = `<td>${splitArr[0]}</td><td>${splitArr[1]}</td><td>${splitArr[2]}</td><td>${splitArr[3]}</td>`;
      tableContent.appendChild(row);
    }
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