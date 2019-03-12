function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id:id
    });
    newToDoText.value = '';
     renderTheUI();
     id+=1;
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');  //ul
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const btn = document.createElement('button');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;
      btn.innerHTML = 'Delete';
      btn.classList.add('mdl-button');

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(btn);

      btn.addEventListener('click',event => {
        event.preventDefault();

        toDos = toDos.filter(item => item.id !== toDo.id);
          renderTheUI();

    });
    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  })

  renderTheUI();
};

window.onload = function() {

  onReady();
};
