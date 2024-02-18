# group35_WEB
Ofri Markevitch & Omer Amsterdam

## Introduction

This is the repository for Group 35's web project. This project is a cooking website where users can view, filter, and interact with a variety of recipes.
The user can also select the ingredients that he has in his kitchen and the website will show him the recipes that he can make with those ingredients.
The project is built using HTML, JavaScript and CSS.
Cookify is a website that helps simplify cooking experience by generating recipe suggestions based on the ingredients the user has at home.
It can also show recipes without filtering by ingredients. (The difference will stand out after the backend will be implemented in the next stage of the project)

#### Navigation:
The webpages includes navigation functionality using event listeners on the navigation bar buttons.
For example:
Clicking on the cookifyBtn button redirects the user to "HomePage.html".
Clicking on the aboutBtn button redirects the user to "HomePage.html".

#### User Experience:
- The website is designed to be intuitive and user-friendly.
- The website includes a responsive design to ensure that it is accessible on a variety of devices.
- The website includes a consistent design (Similar colors and fonts on most pages) and layout to ensure a smooth user experience.
- The website includes a clear and intuitive navigation system to ensure that users can easily find the information they need.

#### User Authentication
User Authentication is implemented to provide personalized experiences for users. Users can sign in to save their favorite recipes and access them later. 
Users functionality is accessible from all pages. 

#### Validations & Filtering
- The website includes form validations to ensure that users input valid data.
- More Validations will be added in the next stage of the project, When the backend will be implemented (For example, the user will not be able to sign up with an existing username or email).
- The website includes recipe filtering functionality to allow users to filter recipes based on various criteria.
- The website includes ingredient filtering functionality to allow users to filter ingredients based on various criteria.
- The filtering functionality will be brought to life when the backend is implemented in the next stage of the project.

### JavaScript
- JavaScript is used in this project to handle and validate user input in forms and generate dynamic content.
- Recipes & Ingredients - JavaScript plays a crucial role in the functionality of the recipe and ingredient grids, It is used to dynamically generate recipe/ingredient cards based on the data in the ‘ingredients’/‘recipes’ array. It also handles user interactions like clicking on the ‘view’ button of a recipe card
- Specific Recepie page - JavaScript is used to handle the ‘add to favorites’ button click event, allowing the user to save the recipe to their favorites list.
- Homepage: JavaScript is used to handle user interactions such as clicking on buttons (like the “cookify” button) and redirecting the user to the appropriate webpage. It also manages the user’s login status and adjusts the display of the navigation bar accordingly.
- SignUp: JavaScript is used to handle the ‘signup’ button click event, redirecting the user to the “SignUp.html” page for account creation.
- UserInfo: JavaScript is used to handle the ‘userinfo’ button click event, redirecting the user to the “UserInfo.html” page where they can view and manage their personal information.
- JavaScript can facilitate communication between the ingredient grid and the recipe generation functionality. It can pass the selected ingredients to other parts of the webpage or trigger actions based on user interactions, ensuring a cohesive and connected user experience.
### CSS
CSS Animations and Layouts:
- Flexbox is extensively used in the project to align and distribute space among items in a container. It’s used in the header, navbar, login form, and more.
- CSS Grid is used in the ‘recipes-grid’ class to create a responsive grid layout for displaying recipe cards. The grid adjusts the number of columns based on the available width.
- Uses CSS animations to create a smooth transition when the user scrolls to the top of the page.
- Uses CSS to create a responsive design that adjusts to different screen sizes.

## Pages

### Home Page // About Us Page

The Home Page serves as the landing page for the website. It provides users with an overview of the website and its features.

### Recipe Page

The Recipe Page displays a list of recipes that users can interact with. Features of this page include:
- Recipe Display: Recipes are displayed in a grid format. Each recipe card includes an image, the name of the recipe, and a view button. When the view button is clicked, the user is taken to a detailed view of the recipe.
- User Authentication: The page includes a login form for users to sign in. This allows users to save their favorite recipes and access them later.
- Recipe Filtering (After the backend stage): Users can filter the recipes based on various criteria. This is achieved using JavaScript to dynamically change the displayed recipes based on the selected filters.
- User Favorites (Will work after backend is implemented): The user can click on the "Show Favorites Button And see his favorite recipes" Each recipe can be saved as favorite in its detailed view page.

### Ingredient Webpage
- Ingredient Choosing ("Show Recipes" button will be implemented with the backend) -The user can select the ingredients that he has in his kitchen and by clicking on the Show Recipes, It will show him recipes that suit his current ingredients.
- Filter & Search - The user can view ingredients after filtering by type or searching for a specific ingredient. Will be implemented with the backend. 
- Ingredients Display - The ingredients are displayed in a grid format. Each ingredient card includes an image, the name of the ingredient, and an "Add" button.

### Single Recipe Details Webpage
The recipe details page displays the recipe's name, image, ingredients, and instructions. Users can also save the recipe to their favorites list.
The recipe is template based, and the data for a specific recipe will be fetched.
It will be customized via JavaScript to display the relevant recipe details.
Since the backend will be added in the next stage of the project. The recipe page currently shows the same recipe page for all the recipes.
- Favorites - The user can save the recipe to his favorites list on this page.

### User Information Page:

- The "UserInfo.html" page provides a dedicated space for users to view and manage their personal information.
- Users are redirected to this page by clicking the "userinfobtn" button.
- The page layout and design are intuitive and straightforward, ensuring a smooth user experience.
- Users can easily navigate and interact with their personal data.

### Sign-Up Page:

- The "SignUp.html" page is where new users can create their account.
- Users are redirected to this page by clicking the "signupBtn" button.
- The page includes a form where users can input their details such as username, password, email, preferred cuisine, and any food sensitivities.
- The sign-up process is designed to be seamless and efficient, with clear instructions and intuitive design.








