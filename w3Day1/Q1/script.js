// Function to fetch category data (e.g., seafood)
async function getCategoriesData() {
  try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Category Data:', data);
  } catch (error) {
      console.error('Something went wrong:', error);
  }
}

// Function to fetch ingredient data (e.g., chicken breast)
async function getIngredientData() {
  try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Ingredient Data:', data);
  } catch (error) {
      console.error('Something went wrong:', error);
  }
}

// Adding event listeners to buttons
document.getElementById('get-category-data').addEventListener('click', getCategoriesData);
document.getElementById('get-ingredient-data').addEventListener('click', getIngredientData);
