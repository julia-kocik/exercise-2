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
    const books = [];
    const formObj = {title: title.value, author: author.value, priority: priority.value, category: category.value};
    books.push(formObj);
    localStorage.setItem('books', JSON.stringify(books));
    const bookArray = JSON.parse(localStorage.getItem('books'));
    bookArray.map(item => {
      //append tr to the table
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.title}</td><td>${item.author}</td><td>${item.priority}</td><td>${item.category}</td>`;
      tableContent.appendChild(row);
    });
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


       


