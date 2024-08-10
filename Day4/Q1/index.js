let products = [];

const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const productRatingInput = document.getElementById('productRating');
const addProductBtn = document.getElementById('addProductBtn');

const priceGraph = document.getElementById('priceGraph');
const ratingGraph = document.getElementById('ratingGraph');
const sortPriceBtn = document.getElementById('sortPriceBtn');
const sortRatingBtn = document.getElementById('sortRatingBtn');

addProductBtn.addEventListener('click', addProduct);
sortPriceBtn.addEventListener('click', sortProductsByPrice);
sortRatingBtn.addEventListener('click', sortProductsByRating);

function addProduct() {
    const name = productNameInput.value;
    const price = parseFloat(productPriceInput.value);
    const rating = parseFloat(productRatingInput.value);

    if (name && price && rating >= 1 && rating <= 5) {
        products.push({ name, price, rating });
        productNameInput.value = '';
        productPriceInput.value = '';
        productRatingInput.value = '';
        updateGraphs();
    } else {
        alert('Please enter valid product details.');
    }
}

function updateGraphs() {
    priceGraph.innerHTML = '';
    ratingGraph.innerHTML = '';

    products.forEach(product => {
        const priceBar = document.createElement('div');
        priceBar.className = 'bar';
        priceBar.style.height = `${product.price}px`;
        priceBar.textContent = `$${product.price}`;

        const ratingBar = document.createElement('div');
        ratingBar.className = 'bar';
        ratingBar.style.height = `${product.rating * 40}px`;
        ratingBar.textContent = product.rating;

        priceGraph.appendChild(priceBar);
        ratingGraph.appendChild(ratingBar);
    });
}

function sortProductsByPrice() {
    products.sort((a, b) => a.price - b.price);
    updateGraphs();
}

function sortProductsByRating() {
    products.sort((a, b) => a.rating - b.rating);
    updateGraphs();
}
