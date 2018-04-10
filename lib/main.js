'use strict';

//============= DOM holders =============
var todoInput = document.querySelector('.todoInput');
var showInputBtn = document.querySelector('.showInput');
var todoList = document.querySelector('.list');

//============ Event listeners with event handlers ===========
todoInput.addEventListener('keypress', function (evt) {
  //grabbing pressed key
  var pressed = evt.key || evt.keyCode;
  //if enter was pressed
  if (pressed === 'Enter' || pressed === 13) {
    //create and display new todo
    addTodoItem();
  }
});

todoList.addEventListener('click', function (evt) {
  //grab span element with trash
  var target = evt.target;
  //delete item if trash was clicked
  removeTodoItem(target);
});

showInputBtn.addEventListener('click', function (evt) {
  //displaying input box
  todoInput.classList.toggle('visible');
  //adding space between input and todo items
  todoList.classList.toggle('away');
});

//============= Functions =================
//adding new todo list item
var addTodoItem = function addTodoItem() {
  //check if user typed anything
  if (todoInput.value === '') {
    console.log('Cannot add empty task');
    return;
  }
  //create li element
  var newTodoEl = document.createElement('li');
  //grab text from input value
  var newTodoText = document.createTextNode(todoInput.value);
  //insert text to new todo
  newTodoEl.appendChild(newTodoText);
  //add icon trash
  newTodoEl.insertAdjacentHTML('beforeend', '<span class="fas fa-trash delete"></span>');
  //add event listener to new todo, listening for click and switching its class to done
  newTodoEl.addEventListener('click', function (evt) {
    evt.currentTarget.classList.toggle('todoItem--done');
  });
  //insert new todo to list
  todoList.appendChild(newTodoEl);
  //add proper class
  newTodoEl.className = 'todoItem';
  //clear input value
  todoInput.value = '';
};

//deleting list item
var removeTodoItem = function removeTodoItem(el) {
  if (el.tagName === 'SPAN') {
    //grab list item which is parent of clicked trash span
    var listItem = el.parentNode;
    listItem.classList.add('todoItem--deleted');
    //delete after animation time
    setTimeout(function () {
      //removing with fallback for remove()
      listItem.remove ? listItem.remove() : listItem.parentNode.removeChild(listItem);
    }, 500);
  }
};