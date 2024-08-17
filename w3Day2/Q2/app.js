const userContainer = document.getElementById('user-container');
const paginationContainer = document.getElementById('pagination-container');
const limit = 6; // Number of users per page
let currentPage = 1;

function fetchUsers(page) {
    fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            userContainer.innerHTML = ''; // Clear previous users
            users.forEach(user => {
                const userElement = document.createElement('div');
                userElement.classList.add('user-item');
                userElement.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                `;
                userContainer.appendChild(userElement);
            });
        })
        .catch(error => {
            userContainer.innerHTML = `<p>Error fetching users: ${error.message}</p>`;
        });
}

function createPagination(totalPages) {
    paginationContainer.innerHTML = ''; // Clear previous buttons
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('pagination-button');
        if (i === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            currentPage = i;
            fetchUsers(currentPage);
            updatePagination();
        });
        paginationContainer.appendChild(button);
    }
}

function updatePagination() {
    const buttons = document.querySelectorAll('.pagination-button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (parseInt(button.textContent) === currentPage) {
            button.classList.add('active');
        }
    });
}

// Initial fetch
fetchUsers(currentPage);

// Assuming there are 10 users in the API
const totalUsers = 10;
const totalPages = Math.ceil(totalUsers / limit);
createPagination(totalPages);
