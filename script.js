// let recipeImage = document.getElementById('recipe-image');
// let recipeName = document.getElementById('recipe-name');
// let recipeInstructions = document.getElementById('recipe-instructions');
// let ingredientList = document.getElementById('ingredient-list');
// let youtubeLink = document.getElementById('youtube-link');
// let recipeBtn = document.getElementById('new-recipe-btn')

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

        //using for loop to list the ingredients
        for (let i = 1; i <= 20; i++) {
            let ingredient = recipe[`strIngredient${i}`];
            let measure = recipe[`strMeasure${i}`];
            if (ingredient) {
                let listItem = document.createElement('li');
                listItem.textContent = `${measure} ${ingredient}`;
                ingredientList.appendChild(listItem);
            }
        };
    })
    .catch(error => {
        console.error('Error fetching the recipe:', error)
    });
}

function setRecipe() {
    getRandomRecipe();
}

//fetch random recipe when page load
document.addEventListener('DOMContentLoaded', () => {
    setRecipe();
});

document.getElementById('new-recipe-btn').addEventListener('click', getRandomRecipe);  //new recipe btn


