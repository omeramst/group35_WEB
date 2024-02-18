# group35_WEB
Ofri Markevitch & Omer Amsterdam

## Introduction

This is the repository for Group 35's web project. This project is a recipe website where users can view, filter, and interact with a variety of recipes.
The user can also select the ingredients that he has in his kitchen and the website will show him the recipes that he can make with those ingredients.
The project is built using HTML, JavaScript and CSS.


## Pages

### Home Page // About Us Page

The Home Page serves as the landing page for the website. It provides users with an overview of the website and its features.

### Recipe Page

The Recipe Page displays a list of recipes that users can interact with. Features of this page include:

- Recipe Display: Recipes are displayed in a grid format. Each recipe card includes an image, the name of the recipe, and a view button. When the view button is clicked, the user is taken to a detailed view of the recipe.
- User Authentication: The page includes a login form for users to sign in. This allows users to save their favorite recipes and access them later.
- Recipe Filtering (After the backend stage): Users can filter the recipes based on various criteria. This is achieved using JavaScript to dynamically change the displayed recipes based on the selected filters.
- User Favorites (Will work after backend is implemented): The user can click on the "Show Favorites Button And see his favorite recipes" Each recipe can be saved as favorite in its detailed view page.

## Functionality

### User Authentication

User Authentication is implemented to provide personalized experiences for users. Users can sign in to save their favorite recipes and access them later. 
Users functionality is accessible from all pages. 

### Ingredient Webpage
- Ingredient Choosing ("Show Recipes" button will be implemented with the backend) -The user can select the ingredients that he has in his kitchen and by clicking on the Show Recipes, It will show him recipes that suit his current ingredients.
- Filter & Search - The user can view ingredients after filtering by type or searching for a specific ingredient. Will be implemented with the backend. 
- Ingredients Display - The ingredients are displayed in a grid format. Each ingredient card includes an image, the name of the ingredient, and an "Add" button.

#### Single Recipe Details Webpage
The recipe details page displays the recipe's name, image, ingredients, and instructions. Users can also save the recipe to their favorites list.
The recipe is template based, and the data for a specific recipe will be fetched.
It will be customized via JavaScript to display the relevant recipe details.
Since the backend will be added in the next stage of the project. The recipe page currently shows the same recipe page for all the recipes.
- Favorites - The user can save the recipe to his favorites list on this page.


#### Navigation:
The webpages includes navigation functionality using event listeners on the navigation bar buttons.
For example:
Clicking on the cookifyBtn button redirects the user to "HomePage.html".
Clicking on the aboutBtn button redirects the user to "HomePage.html".





