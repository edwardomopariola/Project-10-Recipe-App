// let recipeImage = document.getElementById('recipe-image');
// let recipeName = document.getElementById('recipe-name');
// let recipeInstructions = document.getElementById('recipe-instructions');
// let ingredientList = document.getElementById('ingredient-list');
// let youtubeLink = document.getElementById('youtube-link');
// let recipeBtn = document.getElementById('new-recipe-btn')

function getRandomRecipe() {  //Random recipe function
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(Response => {
        let recipe = Response.data.meals[0]

        //getting DOM Element 
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

        //youtube link
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

//fetch random recipe when page load
document.addEventListener('DOMContentLoaded', () => {
    getRandomRecipe();
});

document.getElementById('new-recipe-btn').addEventListener('click', getRandomRecipe);  //new recipe btn


