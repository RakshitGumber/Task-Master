const create = document.querySelector(".create-button");
const colorSelector = document.getElementById("color-selector");
const changeButton = document.getElementById("change");
const settingBar = document.querySelector(".secondary-nav");
const createTaskBtn = document.querySelector(".create-task-button");
const createTaskPanel = document.querySelector(".create-task");
const closeCreateTask = document.querySelector(".close-addtask");
const tasks = document.querySelector(".tasks");
const searchBox = document.getElementById("search-box");

create.addEventListener("click", (e) => {
  e.preventDefault();
  createTask();
  let tasksArray = instance.get("tasks");
  createTaskPanel.style.display = "none";
  document.querySelector(".overlay").style.display = "none";
  renderTask(tasksArray);
});

// Add event listener for the task checkboxes
tasks.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    markTaskDone(e.target.parentElement.parentElement);
  }
});

// Function to mark a task as done
function markTaskDone(taskElement) {
  // Get the task ID from the task element
  const taskId = taskElement.dataset.taskId;

  // Remove the task from storage
  removeTaskFromStorage(taskId);

  // Rerender tasks
  renderTask(instance.get("tasks"));
}

// Function to remove a task from storage
function removeTaskFromStorage(taskId) {
  let tasksArray = instance.get("tasks");
  tasksArray = tasksArray.filter((task) => task.id != taskId);
  instance.remove("tasks", tasksArray);
}

function loadWebsite() {
  const allTasks = instance.get("tasks");
  clearTasks(); // Clear existing tasks before rendering
  renderTask(allTasks);
}

// Add an event listener for the window to reload tasks on page load
window.addEventListener("load", loadWebsite);

searchBox.addEventListener("input", () => {
  searchTasks(searchBox.value.toLowerCase());
});

function searchTasks(searchTerm) {
  const allTasks = instance.get("tasks");
  const filteredTasks = allTasks.filter((task) => {
    const title = task.title.toLowerCase();
    const description = task.description.toLowerCase();
    return title.includes(searchTerm) || description.includes(searchTerm);
  });
  renderTask(filteredTasks);
}
