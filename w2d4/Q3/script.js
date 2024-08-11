class AnalyzeProductData {
  constructor(apiUrl) {
      this.apiUrl = apiUrl;
      this.products = [];
      this.history = [];
  }

  async fetchProductData() {
      try {
          const response = await fetch(this.apiUrl);
          this.products = await response.json();
          this.displayFirstFiveProducts();
          this.populateCategorySelect();
      } catch (error) {
          console.error("Error fetching product data:", error);
      }
  }

  displayFirstFiveProducts() {
      const productList = document.getElementById("product-list-items");
      productList.innerHTML = '';
      this.products.slice(0, 5).forEach(product => {
          const li = document.createElement("li");
          li.textContent = `${product.title} - $${product.price}`;
          productList.appendChild(li);
      });
  }

  populateCategorySelect() {
      const categories = [...new Set(this.products.map(product => product.category))];
      const select = document.getElementById("category-select");
      categories.forEach(category => {
          const option = document.createElement("option");
          option.value = category;
          option.textContent = category;
          select.appendChild(option);
      });
  }

  filterByCategory(category) {
      const filteredProducts = this.products.filter(product => product.category === category);
      this.logFilteredResults(filteredProducts, category);
      this.displayFilteredResults(filteredProducts);
  }

  displayFilteredResults(filteredProducts) {
      const filteredList = document.getElementById("filtered-list-items");
      filteredList.innerHTML = '';
      filteredProducts.forEach(product => {
          const li = document.createElement("li");
          li.textContent = `${product.title} - $${product.price}`;
          filteredList.appendChild(li);
      });
  }

  findHighestPricedProduct() {
      if (this.products.length === 0) return;
      const highestPricedProduct = this.products.reduce((prev, curr) => 
          prev.price > curr.price ? prev : curr
      );
      const highestProductEl = document.getElementById("highest-product");
      highestProductEl.textContent = `${highestPricedProduct.title} - $${highestPricedProduct.price}`;
  }

  calculateAveragePrice() {
      if (this.products.length === 0) return;
      const total = this.products.reduce((sum, product) => sum + product.price, 0);
      const averagePrice = total / this.products.length;
      const avgPriceEl = document.getElementById("avg-price");
      avgPriceEl.textContent = `$${averagePrice.toFixed(2)}`;
  }

  logFilteredResults(filteredProducts, category) {
      const timestamp = new Date().toLocaleString();
      const historyList = document.getElementById("history-list");
      const li = document.createElement("li");
      li.textContent = `Category: "${category}" at ${timestamp}`;
      historyList.appendChild(li);
      this.history.push({ category, timestamp, results: filteredProducts });
  }
}

// Initialize and fetch data
const analyzeProductData = new AnalyzeProductData("https://fakestoreapi.com/products");
analyzeProductData.fetchProductData();

document.getElementById("filter-btn").addEventListener("click", () => {
  const category = document.getElementById("category-select").value;
  if (category) {
      analyzeProductData.filterByCategory(category);
  }
  analyzeProductData.findHighestPricedProduct();
  analyzeProductData.calculateAveragePrice();
});
