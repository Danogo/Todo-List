'use strict';

//============= DOM holders =============
var todoInput = document.querySelector('input');
var todoList = document.querySelector('.list');

todoInput.addEventListener('keypress', function (evt) {
  var pressed = evt.key || evt.keyCode;
  if (pressed === 'Enter' || pressed === 13) {
    var newTodoEl = document.createElement('li');
    newTodoEl.insertAdjacentHTML('afterbegin', '<span class="delete">hello </span>');
    var newTodoText = document.createTextNode(todoInput.value);
    newTodoEl.appendChild(newTodoText);
    todoList.appendChild(newTodoEl);
    todoInput.value = '';
  }
  console.log('hejka');
});

todoList.addEventListener('click', function (evt) {
  evt.stopPropagation();
  if (evt.target && evt.target.tagName === 'LI') {
    console.log('list item was clicked');
  }
  if (evt.target && evt.target.tagName === 'SPAN') {
    console.log('span was clicked');
    // var trash = evt.target;
    // trash.parentNode.remove ? trash.parentNode.remove() : trash.parentNode.parentNode.removeChild(trash.parentNode);
  }
});
