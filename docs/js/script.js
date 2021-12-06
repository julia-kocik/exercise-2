const form = document.querySelector('.add_form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const priority = document.getElementById('priority');
const category = document.getElementById('category');
const tableContent = document.querySelector('.table_content');
const defaultRow = document.getElementById('default_row');


const submitForm = (e) => {
  //prevent default
  e.preventDefault();
  //validation
  if(title.value.length >= 1 && author.value.length >=3 && priority.value >=1 && priority.value <=5 && category.value) {
    //clear default row
    defaultRow.innerHTML = '';
    //save in local storage
    const formObj = {title: title.value, author: author.value, priority: priority.value, category: category.value};
    const currentStorage = JSON.parse(localStorage.getItem('books'));
    if(currentStorage !== null) {
      localStorage.setItem('books', JSON.stringify([...currentStorage, formObj]));
    } else {
      localStorage.setItem('books', JSON.stringify([formObj]));
    }
    //append one tr to the table
    const row = document.createElement('tr');
    row.innerHTML = `<td>${formObj.title}</td><td>${formObj.author}</td><td>${formObj.priority}</td><td>${formObj.category}</td>`;
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

//render whole array after reload
const setTableAfterReload = () => {
  defaultRow.innerHTML = '';
  const currentStorage = JSON.parse(localStorage.getItem('books'));
  currentStorage.map(item => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${item.title}</td><td>${item.author}</td><td>${item.priority}</td><td>${item.category}</td>`;
    tableContent.appendChild(row);
  });
};



form.addEventListener('submit', submitForm);
setTableAfterReload();

       


