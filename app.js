window.onload = function() {
  onReady();
};


function onReady() {
  let toDos = JSON.parse(localStorage.getItem('toDos'));
  console.log(toDos);
  const addToDoForm = document.getElementById('addToDoForm');

for(let i = 0; i < toDos.length; i++) {
  toDos[i].id = i;
}

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id:toDos.length
    });
    newToDoText.value = '';
     renderTheUI();

     localStorage.setItem('toDos',JSON.stringify(toDos));
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

    checkbox.addEventListener('change', event => {
if(toDo.complete == false) {
toDo.complete = true;
} else {
  toDo.complete =false;
}
console.log(toDo);

});

      btn.addEventListener('click',event => {
        event.preventDefault();

        toDos = toDos.filter(item => item.id !== toDo.id);
          renderTheUI();
          localStorage.setItem('toDos',JSON.stringify(toDos));
    });

    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();

  })

  renderTheUI();
};
