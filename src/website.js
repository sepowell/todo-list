function initalizeWebsite() {
  const page = document.getElementById('page')
  page.innerHTML = '';

  page.appendChild(renderInboxPage());

}

function renderInboxPage() {
  const inboxContainer = document.createElement('div')
  inboxContainer.classList.add('container');
  inboxContainer.setAttribute('id', 'container');

  const pageTitle = document.createElement('h3');
  pageTitle.innerText = 'Inbox'
  pageTitle.classList.add('title');
  inboxContainer.appendChild(pageTitle);

  const titleBreak = document.createElement('hr');
  inboxContainer.appendChild(titleBreak);

  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');
  taskContainer.setAttribute('id', 'task-container');
  inboxContainer.appendChild(taskContainer); 

  const newTaskButton = document.createElement('button');
  newTaskButton.classList.add('new-task-btn');
  newTaskButton.innerText = '+ New Task'
  newTaskButton.addEventListener("click", newTask);
  inboxContainer.appendChild(newTaskButton);

  return inboxContainer
}

function newTask() {
  const taskContainer = document.getElementById('task-container');

  const testTask = document.createElement('div');
  testTask.innerText = "hello?";

  taskContainer.appendChild(testTask);

}
export { initalizeWebsite };
