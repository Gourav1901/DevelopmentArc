const productContainer = document.getElementById('product-container');
const sortSelect = document.getElementById('sort');

async function fetchProducts(sortBy = 'name') {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?_sort=${sortBy}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        productContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayProducts(products) {
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p><strong>Email:</strong> ${product.email}</p>
            <p><strong>Phone:</strong> ${product.phone}</p>
            <p><strong>Website:</strong> <a href="http://${product.website}" target="_blank">${product.website}</a></p>
        `;
        productContainer.appendChild(productElement);
    });
}

// Event listener for sorting
sortSelect.addEventListener('change', () => {
    const sortBy = sortSelect.value;
    fetchProducts(sortBy);
});

// Initial fetch on page load
fetchProducts();
