let recipes = [];

function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <div class="full-details">
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                <button onclick="editRecipe(${index})">Edit</button>
                <button onclick="deleteRecipe(${index})">Delete</button>
            </div>
        `;
        recipeList.appendChild(recipeItem);
    });

    const clearDiv = document.createElement('div');
    clearDiv.classList.add('clear');
    recipeList.appendChild(clearDiv);
}



function saveRecipe() {
    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    const newRecipe = {
        name,
        ingredients,
        instructions,
    };


    if (editingIndex !== null) {
        recipes[editingIndex] = newRecipe;
        editingIndex = null;
    } else {
        // If adding a new recipe
        recipes.push(newRecipe);
    }

    // Clear the form
    document.getElementById('recipe-name').value = '';
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';

    
    displayRecipes();
}

// Function to edit a recipe
let editingIndex = null;

function editRecipe(index) {
    editingIndex = index;
    const recipe = recipes[index];

    
    document.getElementById('recipe-name').value = recipe.name;
    document.getElementById('ingredients').value = recipe.ingredients;
    document.getElementById('instructions').value = recipe.instructions;
}

// Function to delete a recipe
function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}

// Initial display
displayRecipes();
