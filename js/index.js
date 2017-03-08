'use strict';

(function IIFE() {
  var btnAddNewTask = document.querySelector('.js-btn-add-new-task');
  var list = document.querySelector('.js-todo-list');
  btnAddNewTask.addEventListener('click', addNewTask);
  list.addEventListener('click', eventHandlerListItem);

  function eventHandlerListItem(event) {
    if (event.target.classList.contains('js-todo-list__remove-task-btn')) {
      removeListItem(event);
    }
  }

  function addNewTask(event) {
    event.preventDefault();
    var inputTextNewTask = document.querySelector('.js-form__input-text-new-task');
    outputListItem(inputTextNewTask.value, createListItem, list);
    clearValue(inputTextNewTask);

    function clearValue(itemToClear) {
      itemToClear.value = "";
      return itemToClear;
    }
  }

  function createListItem(text) {
    var listItem = document.createElement('LI');
    listItem.className = 'o-pack c-todo-list__item';
    listItem.appendChild(createTaskTextItem(text));
    listItem.appendChild(createRemoveTaskBtn());

    function createTaskTextItem(text) {
      var taskTextItem = document.createElement('SPAN');
      taskTextItem.className = 'c-todo-list__task-text';
      taskTextItem.innerHTML = text;
      return taskTextItem;
    }

    function createRemoveTaskBtn() {
      var removeTaskBtn = document.createElement('I');
      removeTaskBtn.className = 'c-todo-list__remove-task-btn js-todo-list__remove-task-btn c-icon material-icons';
      removeTaskBtn.innerHTML = 'close';

      return removeTaskBtn;
    }

    return listItem;
  }

  function removeListItem(event) {
    var list = event.target.parentNode.parentNode;
    var listItem = event.target.parentNode;
    list.removeChild(listItem);
  }

  function outputListItem(text, itemToAppend, list) {
    if (text) {
      list.appendChild(itemToAppend(text));
    }
  }
})();