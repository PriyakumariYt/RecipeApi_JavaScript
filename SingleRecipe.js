// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const label = urlParams.get("label");
const source = urlParams.get("source");
const image = urlParams.get("image");
const ingredientLines = urlParams.get("ingredientLines").split(",");

// Display the recipe data
const FoodItem = document.getElementById("FoodItem");
const recipeBox = document.createElement("div");
recipeBox.setAttribute("class", "Recipe");
recipeBox.innerHTML = `
      <img src="${image}" alt="${label}">
      <h2>${label}</h2>
      <h3>${source}</h3>
      <h4>Ingredients:</h4>
      <ul>
        ${ingredientLines
          .map((ingredient) => `<li>${ingredient}</li>`)
          .join("")}
      </ul>
      <button onclick="window.history.back()">Go Back</button>
    `;
FoodItem.appendChild(recipeBox);

const backButton = document.getElementById("back-button");
backButton.addEventListener("click", () => {
  window.history.back();
});
