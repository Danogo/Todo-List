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

 });

showInputBtn.addEventListener('click', (evt) => {
  //displaying input box
  todoInput.classList.toggle('visible');
  //adding space between input and todo items
  todoList.classList.toggle('away');
});


//============= Functions =================
//adding new todo list item
const addTodoItem = () => {
  //check if user typed anything
  if (todoInput.value === '') {
    console.log('Cannot add empty task');
    return;
  }
  //create li element
  let newTodoEl = document.createElement('li');
  //grab text from input value
  let newTodoText = document.createTextNode(todoInput.value);
  //insert text to new todo
  newTodoEl.appendChild(newTodoText);
  //add icon trash
  newTodoEl.insertAdjacentHTML('beforeend', '<span class="fas fa-trash delete"></span>');
  //add event listener to new todo, listening for click and switching its class to done
  newTodoEl.addEventListener('click', (evt) => {
    evt.currentTarget.classList.toggle('todoItem--done');
  });
  //insert new todo to list
  todoList.appendChild(newTodoEl);
  //add proper class
  newTodoEl.className = 'todoItem';
  //clear input value
  todoInput.value = '';
}

//deleting list item
const removeTodoItem = (el) => {
  if (el.tagName === 'SPAN') {
    //grab list item which is parent of clicked trash span
    let listItem = el.parentNode;
    listItem.classList.add('todoItem--deleted');
    //delete after animation time
    setTimeout(() => {
      //removing with fallback for remove()
      listItem.remove ? listItem.remove() : listItem.parentNode.removeChild(listItem);
    }, 500);
  }
}
