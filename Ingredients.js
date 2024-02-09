


const ingredients = [

    { name: "Kiwi", image: `photos/Kiwi.png`, type: "Fruits" },
    { name: "Orange", image: "ingredient2.jpg", type: "Fruits" },
    { name: "Raspberry", image: "ingredient5.jpg", type: "Fruits"},
    { name: "Cherry", image: "ingredient4.jpg", type: "Fruits" },
    { name: "Green_Apple", image: "ingredient3.jpg", type: "Fruits" },

];

const ingredientGrid = document.querySelector('.ingredient-grid');

ingredients.forEach(ingredient => {
    const ingredientCard = document.createElement('div');
    ingredientCard.classList.add('ingredient-card');
    ingredientCard.dataset.type = ingredient.type;

    const ingredientImage = document.createElement('img');
    ingredientImage.src = ingredient.image;
    ingredientImage.alt = ingredient.name;

    const ingredientName = document.createElement('h3');
    ingredientName.textContent = ingredient.name;
    ingredientName.classList.add('ingredient-name'); // Ofri - Added this line to make the name of the ingredient centered.

    const applyButton = document.createElement('button');
    applyButton.textContent = 'Apply';
    applyButton.classList.add('IngAddButton');
    // Ofri - This event listener will help us later when we will do backend and Add the ingredients to the user's List.
    applyButton.addEventListener('click', () => {
    if (applyButton.style.backgroundColor === 'rgb(98, 205, 20)') { // //Ofri - IF already green cause was clicked before
        applyButton.style.backgroundColor = '#6D31EDFF';
    } else { //Ofri - If not green cause was not clicked before
        applyButton.style.backgroundColor = '#62CD14';
    }
});

    ingredientCard.append(ingredientImage, ingredientName, applyButton);
    ingredientGrid.append(ingredientCard);
});
