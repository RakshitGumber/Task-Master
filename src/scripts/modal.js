class Storage {
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  set(key, obj) {
    let array = [];
    if (this.get(key) === null) {
      array.push(obj);
      localStorage.setItem(`${key}`, JSON.stringify(array));
    } else {
      array = [...this.get(key), obj];
      localStorage.setItem(`${key}`, JSON.stringify(array));
    }
  }
}

function createTask() {
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  let id;
  if (instance.get("tasks") === null || instance.get("tasks") === undefined) {
    id = 0;
  } else {
    id = instance.get("tasks");
    id = id[id.length - 1].id + 1;
  }
  let timeString = new Date();
  let time = `${timeString.getHours()}:${timeString.getMinutes()}`;

  instance.set("tasks", {
    id: id,
    title: title.value,
    description: description.value,
    time: time,
  });
  title.value = "";
  description.value = "";
}
