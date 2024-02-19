const APP_ID = "9cd54306";
const APP_KEY = "8bd8774d3ae9845ea04fa1da22001b06";

const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");
const FoodItem = document.querySelector("#container");

const APIURL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;

const getFood = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data.hits);
  showFood(data.hits);
};

const showFood = (data) => {
  FoodItem.innerHTML = "";

  data.forEach((elem) => {
      const { label, source, image, ingredientLines } = elem.recipe;
    const recipeUrl = `SingleRecipe.html?label=${encodeURIComponent(
      label
    )}&source=${encodeURIComponent(source)}&image=${encodeURIComponent(
      image
    )}&ingredientLines=${encodeURIComponent(ingredientLines.join(","))}`;

  
    const box = document.createElement("div");
    box.setAttribute("class", "Recipe");
    box.innerHTML = `
          <img src="${image}" alt="${label}">
          <h2>${label}</h2>
          <h3>${source}</h3>
       
        
    <button onclick="window.location.href='${recipeUrl}'">View Recipe</button>
      
    `;

    FoodItem.appendChild(box);
  });
};


searchInput.addEventListener("keyup", function (event) {
  const query = event.target.value.trim();
  if (query) {
    const searchUrl = `${APIURL}&q=${query}`;
    getFood(searchUrl);
  }
});
