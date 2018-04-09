//============= DOM holders =============
const todoInput = document.querySelector('.todoInput');
const showInputBtn = document.querySelector('.showInput');
const todoList = document.querySelector('.list');

//============ Event listeners with event handlers ===========
todoInput.addEventListener('keypress', (evt) => {
  //grabbing pressed key
  let pressed = evt.key || evt.keyCode;
  //if enter was pressed
  if (pressed === 'Enter' || pressed === 13) {
    //create and display new todo
    addTodoItem();
  }
 });


 todoList.addEventListener('click', (evt) => {
   //grab span element with trash
   let target = evt.target;
   //delete item if trash was clicked
   removeTodoItem(target);
   //fixing box-shadow bug for second container with 0 height
   if (todoList.children.length <= 0) {
     todoList.parentNode.classList.add('container--empty');
   }
 });

showInputBtn.addEventListener('click', (evt) => {
  //displaying input box
  todoInput.classList.toggle('visible');
  //adding space between input and todo items
  todoList.classList.toggle('away');
});

//adding new todo list item
const addTodoItem = () => {
  //check if user typed anything
  if (todoInput.value === '') {
    console.log('Cannot add empty task');
    return;
  }
  let newTodoEl = document.createElement('li');
  newTodoEl.className = 'todoItem';
  let newTodoText = document.createTextNode(todoInput.value);
  newTodoEl.appendChild(newTodoText);
  newTodoEl.insertAdjacentHTML('beforeend', '<span class="fas fa-trash delete"></span>');
  newTodoEl.addEventListener('click', (evt) => {
    evt.currentTarget.classList.toggle('todoItem--done');
  });
  todoList.appendChild(newTodoEl);
  todoList.parentNode.classList.remove('container--empty');
  todoInput.value = '';
}

//deleting listitem
const removeTodoItem = (el) => {
  if (el.tagName === 'SPAN') {
    //grab list item which is parent of clicked trash span
    let listItem = el.parentNode;
    //removing with fallback for IE
    listItem.remove ? listItem.remove() : listItem.parentNode.removeChild(listItem);
  }
}
