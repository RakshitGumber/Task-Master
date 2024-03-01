const create = document.querySelector(".create-button");

create.addEventListener("click", (e) => {
  e.preventDefault();
  createTask();
  let tasks = instance.get("tasks");
  createTaskPanel.style.display = "none";
  document.querySelector(".overlay").style.display = "none";
  renderTask(tasks);
});

function loadWebsite() {
  renderTask(instance.get("tasks"));
}

window.addEventListener("load", loadWebsite);
