const tasksContainer = document.querySelector(".tasks");

function renderTask(arr) {
  let taskString = "";
  arr.forEach((element) => {
    taskString += `
        <article class="task" data-task-id="${element.id}">
            <div class="task-check">
              <input type="checkbox" />
              <h2 class="task-title">${element.title}</h2>
            </div>
            <p class="content">${element.description}</p>
            <div class="task-details">
              <span>${element.time}</span>
            </div>
        </article>
    `;
  });
  tasksContainer.innerHTML = taskString;
}
function changeColor() {
  const cssRoot = document.querySelector(":root");
  const accentColors = {
    yellow: ["#FCE38A", "#F38181"],
    red: ["#F54EA2", "#FF7676"],
    blue: ["#17EAD9", "#6078EA"],
    grape: ["#622774", "#C53364"],
    purple: ["#7117EA", "#EA6060"],
    emrald: ["#42E695", "#3BB2B8"],
    violet: ["#F02FC2", "#6094EA"],
    black: ["#65799B", "#5E2563"],
    green: ["#184E68", "#57CA85"],
    marine: ["#5B247A", "#1BCEDF"],
  };
  cssRoot.style.setProperty("--accent1", accentColors[colorSelector.value][0]);
  cssRoot.style.setProperty("--accent2", accentColors[colorSelector.value][1]);
  changeButton.style.display = "none";
}

function clearTasks() {
  tasksContainer.innerHTML = ""; // Assuming tasksContainer is the parent container for tasks
}
