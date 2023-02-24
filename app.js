'use strict'

// UI Assignment
const UIaddTaskBtn = document.querySelector('.add-card');
const addUi = document.querySelector('.modall');
const UIclose = document.querySelector('.mod-close');
const UITitleInput = document.getElementById('task-input');
const UItaskDetails = document.getElementById('task-detail');
const UIcAddTaskBtn = document.getElementById('add-task-btn');
const UIcardContainer = document.querySelector('.card-container');
const UIbody = document.querySelector('body');

// Load all event listener
loadEventListeners();

// Events 
function loadEventListeners() {
    // Add Task Ui Unveil Event
    UIaddTaskBtn.addEventListener('click', addTaskUnveil);

    // Clsoe UI Event
    UIclose.addEventListener('click', modalClose);

    // Add Task Event
    UIbody.addEventListener('click', addTask);
    
}

// Show Add Task UI
function addTaskUnveil () {
    addUi.classList.remove('d-none');
}

// Close Add Task UI
function modalClose(e) {
    e.target.parentElement.parentElement.classList.add('d-none');
    console.log('close modal');
}

// DELEGATING on BODY UI
function addTask(e) {
    // Add Task to the UI

    if(e.target.classList.contains('add-task-btn')){
        const card = document.createElement('div');
        card.className = 'card t-card col-12 col-md-6 col-lg3 col-xl-2 border-0 p-0';
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card  align-items-center justify-content-center h-100';
        const taskInner = document.createElement('div');
        taskInner.className = 'task-card-inner d-flex align-items-center justify-content-center flex-column h-100 p-1 position-relative';
        const tBeauty = document.createElement('div');
        tBeauty.className = 't-beauty position-absolute';
        taskInner.appendChild(tBeauty);
        tBeauty.innerHTML ='<i class="fa fa-feather"></i> <i class="fa fa-remove delete-item fs-5"></i>';
        const taskTitle = document.createElement('h5');
        taskTitle.className = 'ts-title';
        taskTitle.innerText = UITitleInput.value;
        taskInner.appendChild(taskTitle);
        const taskDescription = document.createElement('p');
        taskDescription.className = 'card-task-text text-center w-100 p-3';
        taskDescription.innerText = UItaskDetails.value;
        taskInner.appendChild(taskDescription);
        taskCard.appendChild(taskInner);
        card.appendChild(taskCard);
        UIcardContainer.appendChild(card);
        addUi.classList.add('d-none');
        UItaskDetails.value = '';
        UITitleInput.value = '';

        
        e.preventDefault();
    } 

    // Close The Task Input UI
    else if (e.target.classList.contains('mod-close')){
        e.target.parentElement.parentElement.classList.add('d-none');
        console.log('close modal');
    }

    // Remove Task Form UI
    else if(e.target.classList.contains('delete-item')){
        e.target.parentElement.parentElement.parentElement.parentElement.remove();
    }

    // Show the Task In Detail in a new Modal
    else if(e.target.classList.contains('task-card') || e.target.classList.contains('task-card-inner') || e.target.classList.contains('card-task-text')){
        const UItxtModal = document.querySelector('.txt-modall');
        const UIheading = document.querySelector('.heading');
        const UIxTaskDetail = document.querySelector('#xtask-detail');
        UItxtModal.classList.remove('d-none');

        if (e.target.classList.contains('card-task-text')) {
            
            UIheading.innerHTML = e.target.parentElement.children[1].innerHTML
            UIxTaskDetail.value = e.target.innerText;
        } 
    }

    // Edit Task
    e.preventDefault();

}
    

//     e.preventDefault();
// }