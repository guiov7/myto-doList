const $myForm = document.querySelector('form');
$myForm.addEventListener('submit', function addtask(evt) {
    evt.preventDefault();
    // CREATE function 
    const inputField =  document.querySelector('#newtask input');
    if(inputField.value.length == 0) {
        alert("Please Enter your task.")
    } else{
        var taskId = 0;
        document.querySelector('#tasks').innerHTML += 
        `
        <div class="task">
        <input id="taskstatus" type="checkbox">
        <span id="taskname">
        ${document.querySelector('#newtask input').value}
        </span>
        
        <button class="delete">
        <i class="fa-solid fa-trash-can"></i>
        </button>
        </div>
        `
        ;
        // DELETE function
        var current_tasks = document.getElementsByClassName('delete');
        for(var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        };
        inputField.value = '';
    } 
});
