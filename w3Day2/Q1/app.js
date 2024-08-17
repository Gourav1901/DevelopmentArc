const todosContainer = document.getElementById('todos-container');

function fetchTodos() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then(todos => {
            todosContainer.innerHTML = ''; // Clear previous todos
            todos.forEach(todo => {
                const todoElement = document.createElement('div');
                todoElement.classList.add('todo-item');
                todoElement.innerHTML = `
                    <input type="checkbox" ${todo.completed ? 'checked' : ''}>
                    <label>${todo.title}</label>
                `;
                todosContainer.appendChild(todoElement);
            });
        })
        .catch(error => console.error('Error fetching todos:', error));
}

// Initial fetch
fetchTodos();
