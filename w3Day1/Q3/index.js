const apiKey = 'your_api_key'; // Replace with your OMDB API key
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');

let currentPage = 1;
let currentQuery = '';

async function fetchMovies(query, page = 1) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&page=${page}`);
        const data = await response.json();

        if (data.Response === 'True') {
            displayMovies(data.Search);
            updatePagination(data.totalResults, page);
        } else {
            displayError(data.Error);
        }
    } catch (error) {
        displayError('Network error occurred. Please try again.');
    }
}

function displayMovies(movies) {
    resultsContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;

        resultsContainer.appendChild(movieCard);
    });
}

function updatePagination(totalResults, page) {
    const totalPages = Math.ceil(totalResults / 10);

    pageInfo.textContent = `Page ${page} of ${totalPages}`;
    prevPageButton.disabled = page === 1;
    nextPageButton.disabled = page === totalPages;

    currentPage = page;
}

function displayError(message) {
    resultsContainer.innerHTML = `<p>${message}</p>`;
}

searchButton.addEventListener('click', () => {
    currentQuery = searchInput.value.trim();
    if (currentQuery) {
        currentPage = 1;
        fetchMovies(currentQuery, currentPage);
    } else {
        displayError('Please enter a movie title.');
    }
});

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        fetchMovies(currentQuery, currentPage - 1);
    }
});

nextPageButton.addEventListener('click', () => {
    fetchMovies(currentQuery, currentPage + 1);
});
