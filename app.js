function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');


    addToDoForm.addEventListener('submit', event => {

      event.preventDefault();
      //get the text
      let title  = newToDoText.value;

      //creat a new li
      let newLi = document.createElement('li');

      //set the title
      newLi.textContent = title;

      //create a new input
      let checkbox = document.createElement('input');

      //set the input's type to checkbox
      checkbox.type = "checkbox";

      //attach the checkbox to the li
      newLi.appendChild(checkbox);

      //attach the li to the ul
      toDoList.appendChild(newLi);

      //empty the input
      newToDoText.value = '';

      let btn = document.createElement("button");
      btn.innerHTML = "Delete";
    btn.classList.add("mdl-button");

      newLi.appendChild(btn);


      btn.addEventListener('click', event => {
        event.preventDefault();
        if(checkbox.checked) {
          newLi.remove();
        }
   });

    });


};

window.onload = function() {

   onReady();
};
