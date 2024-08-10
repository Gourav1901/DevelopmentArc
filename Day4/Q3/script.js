// Task array to store tasks
let tasks = [];

// DOM elements
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const statusFilter = document.getElementById('statusFilter');

// Add event listener for form submission
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const title = document.getElementById('taskTitle').value.trim();
    const description = document.getElementById('taskDescription').value.trim();
    const status = document.getElementById('taskStatus').value;
    
    // Validate input
    if (title === '' || description === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Create a new task object
    const task = {
        id: Date.now(), // unique ID based on timestamp
        title,
        description,
        status
    };

    // Add task to the array
    tasks.push(task);
    renderTasks(tasks);
    
    // Reset form
    taskForm.reset();
});

// Function to render tasks
function renderTasks(taskArray) {
    // Clear current list
    taskList.innerHTML = '';

    // Filter tasks based on status filter
    const filteredTasks = taskArray.filter(task => {
        if (statusFilter.value === 'All') return true;
        return task.status === statusFilter.value;
    });

    // Render each task
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.dataset.id = task.id;

        li.innerHTML = `
            <div class="task-details">
                <strong>${task.title}</strong>
                <p>${task.description}</p>
                <span>Status: ${task.status}</span>
            </div>
            <div class="task-buttons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        
        taskList.appendChild(li);

        // Add event listeners for edit and delete
        li.querySelector('.edit-btn').addEventListener('click', () => editTask(task.id));
        li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(task.id));
    });
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks(tasks);
}

// Function to edit a task
function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (!task) return;

    const li = document.querySelector(`li[data-id="${id}"]`);

    li.classList.add('edit-mode');
    li.innerHTML = `
        <div class="task-details">
            <input type="text" id="editTitle" value="${task.title}">
            <input type="text" id="editDescription" value="${task.description}">
            <select id="editStatus">
                <option value="Pending" ${task.status === 'Pending' ? 'selected' : ''}>Pending</option>
                <option value="In Progress" ${task.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                <option value="Completed" ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
            </select>
        </div>
        <div class="task-buttons">
            <button class="save-btn">Save</button>
            <button class="cancel-btn">Cancel</button>
        </div>
    `;

    li.querySelector('.save-btn').addEventListener('click', () => saveEdit(id));
    li.querySelector('.cancel-btn').addEventListener('click', () => renderTasks(tasks));
}

// Function to save edited task
function saveEdit(id) {
    const title = document.getElementById('editTitle').value.trim();
    const description = document.getElementById('editDescription').value.trim();
    const status = document.getElementById('editStatus').value;

    if (title === '' || description === '') {
        alert('Please fill in all fields.');
        return;
    }

    tasks = tasks.map(task => {
        if (task.id === id) {
            return {
                ...task,
                title,
                description,
                status
            };
        }
        return task;
    });

    renderTasks(tasks);
}

// Event listener for status filter
statusFilter.addEventListener('change', () => renderTasks(tasks));

// Initial render
renderTasks(tasks);
