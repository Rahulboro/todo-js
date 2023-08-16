/* This is the JavaScript for the todo app */

const app = document.getElementById("app");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");

let todoItems = [];

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const task = newTaskInput.value;
  if (task) {
    todoItems.push({
      text: task,
      checked: false,
      id: Date.now(),
    });
    renderTodoList();
    newTaskInput.value = "";
  }
}

function renderTodoList() {
  todoList.innerHTML = "";
  todoItems.forEach((todo) => {
    renderTodo(todo);
  });
}

function renderTodo(todo) {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  if (todo.checked) {
    li.classList.add("done");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.checked;
  checkbox.addEventListener("change", () => {
    todo.checked = !todo.checked;
    renderTodoList();
  });

  const label = document.createElement("label");
  label.textContent = todo.text;

  const button = document.createElement("button");
  button.textContent = "Delete";
  button.addEventListener("click", () => {
    todoItems.splice(todoItems.indexOf(todo), 1);
    renderTodoList();
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(button);

  todoList.appendChild(li);
}

window.onload = renderTodoList;
