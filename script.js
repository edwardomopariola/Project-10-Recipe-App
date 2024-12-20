let recipeImage = document.getElementById('recipe-image');
let recipeName = document.getElementById('recipe-name');
let recipeInstructions = document.getElementById('recipe-instructions');
let ingredientList = document.getElementById('ingredient-list');
let youtubeLink = document.getElementById('youtube-link');
let recipeBtn = document.getElementById('new-recipe-btn')

window.onload = function () {  //random recipe whne page load
    document.addEventListener('DOMContentLoaded', () => {
        getRandomRecipe();
    
        document.getElementById('recipeBtn').addEventListener('click', getRandomRecipe);
    });
}

function getRandomRecipe() {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(Response => {
        let recipe = Response.data.meals[0]

        //getting DOM lement 
        let recipeImage = document.getElementById('recipe-image');
        let recipeName = document.getElementById('recipe-name');
        let recipeInstructions = document.getElementById('recipe-instructions');
        let ingredientList = document.getElementById('ingredient-list');
        let youtubeLink = document.getElementById('youtube-link');
        let recipeBtn = document.getElementById('new-recipe-btn')

        //set recipe name & image
        recipeImage.src = recipe.strMealThumb;
        recipeImage.alt = recipe.strMeal;
        recipeName.textContent = recipe.strMeal;

        //youtube video link
        youtubeLink.href = recipe.strYoutube;

        //recipe instructions
        recipeInstructions.textContent = recipe.strInstructions;

        // clear previous ingredient
        ingredientList.innerHTML = '';
    })
}