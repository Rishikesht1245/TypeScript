import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

let todos: Todo[] = [];

const todosContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;

const todoInput = document.getElementById("todoInput") as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.round(Math.random() * 1000)),
  };

  todos.push(todo);
  console.log(todos);
  todoInput.value = "";

  // add todo to UI
  renderTodo(todos);
};

const generateTodoItem = (item: Todo) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";

  //creating a check box
  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = item.isCompleted;

  // making the todo completed
  checkBox.onchange = () => {
    console.log("fel");
    title.className = checkBox.checked ? "textCut" : "";
    item.isCompleted = true;
  };

  // creating para for title
  const title: HTMLParagraphElement = document.createElement("p");
  title.innerText = item.title;
  title.className = item.isCompleted ? "textCut" : "";
  // creating delete button
  const btn: HTMLButtonElement = document.createElement("button");
  btn.innerText = "X";
  btn.className = "deleteBtn";

  // deleting the todo
  btn.onclick = () => {
    deleteTodo(item.id);
  };

  // appending all to todo item div
  todo.append(checkBox, title, btn);
  todosContainer.append(todo);
};

const deleteTodo = (id: string) => {
  todos = todos.filter((item) => item.id !== id);
  renderTodo(todos);
};
const renderTodo = (todos: Todo[]): void => {
  // emptying the div otherwise repeated todos
  todosContainer.innerText = "";
  todos.forEach((item) => {
    generateTodoItem(item);
  });
};
