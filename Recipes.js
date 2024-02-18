
//consts and event listeners
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");
const signupBtn = document.getElementById("signup");
const cookifyBtn = document.getElementById("imagelogo");
const aboutBtn = document.getElementById("aboutus");
const userinfobtn = document.getElementById("userinfo");
const recipesBut = document.getElementById("recipes");
const ingredients = document.getElementById("ingredients");
const user = JSON.parse(localStorage.getItem('user'));


//check if user is logged in
window.onload = function () {
    console.log('first check');
    const logoutbutn = document.getElementById("logout");
    const userinfobtn = document.getElementById("userinfo");
    const loginbutn = document.getElementById("login");
    const signupbutn = document.getElementById("signup");
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('first check');
    if (user) {
        console.log('if check');
        loginbutn.style.display = "none";
        signupbutn.style.display = "none";
        logoutbutn.style.display = "block";
        userinfobtn.style.display = "block";
    } else {
        console.log('else check');
        loginbutn.style.display = "block";
        signupbutn.style.display = "block";
        logoutbutn.style.display = "none";
        userinfobtn.style.display = "none";
    }
    //create recipe cards
    createRecipeCards();
}

//login button
loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    //variables
    const popup = document.getElementById("loginPopup");
    const closeButton = document.getElementById("closePopup");
    const submitButton = document.getElementById("loginSubmit");
    //display login popup
    popup.style.display = "flex";
    //event listeners
    //close button
    closeButton.addEventListener("click", function (e) {
        e.preventDefault();
        popup.style.display = "none";
    });
    //submit button
    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        //variables
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        //validation
        if (email === '' || password === '') {
            alert('Please fill in all fields');
            email.value = "";
            password.value = "";
            consle.log(email, password);
        } else {
            /* here will be no validation only db check */

            //navbar display changes
            popup.style.display = "none";
            const logoutbutn = document.getElementById("logout");
            const userinfobtn = document.getElementById("userinfo");
            const loginbutn = document.getElementById("login");
            const signupbutn = document.getElementById("signup");
            loginbutn.style.display = "none";
            signupbutn.style.display = "none";
            logoutbutn.style.display = "block";
            userinfobtn.style.display = "block";


            //save user in local storage
            console.log(email, password);
            const user = new User();
            user.email = email;
            user.password = password;
            localStorage.setItem('user', JSON.stringify(user));
        }
    });
});

//ingredients button
ingredients.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "Ingredients.html";
});

//recipes button
recipesBut.addEventListener("click", function (e) {
    e.preventDefault();
    location.reload()
});


//logout button
logoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    //remove user from local storage
    localStorage.removeItem('user');
    //navbar display changes
    const logoutbutn = document.getElementById("logout");
    const userinfobtn = document.getElementById("userinfo");
    const loginbutn = document.getElementById("login");
    const signupbutn = document.getElementById("signup");
    loginbutn.style.display = "block";
    signupbutn.style.display = "block";
    logoutbutn.style.display = "none";
    userinfobtn.style.display = "none";
});

//signup button
signupBtn.addEventListener("click", function (e) {
    e.preventDefault();
    //variables
    window.location.href = "SignUp.html";
});

//cookify button
cookifyBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "HomePage.html";
});

//about button
aboutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "HomePage.html";
});

//user info button
userinfobtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "UserInfo.html";
});

class User {
    constructor(username, password, email, cuisine, sensitive) {
        this.username = '';
        this.password = '';
        this.email = '';
        this.cuisine = [];
        this.sensitive = [];
    }
}

// Ofri - Get the slider element from the HTML using its id
var slider = document.getElementById("servingsSlider");

// Ofri - Get the output element from the HTML using its id
var output = document.getElementById("sliderValue");

// Ofri - Add an oninput event listener to the slider
slider.oninput = function() {
  // Ofri - When the slider's value changes, update the output element's text to match the slider's current value
  output.innerHTML = this.value;
}



// Ofri - The following code is responsible for the autofill of the grid using recipe cards.

const recipes = [
    { id: 1, name: "Simple Strawberry Cake", image: "photos/Cake.jpeg", difficulty: "Normal" , servings: 4 , cuisine: "General" },
    { id: 2, name: "Paprika Chicken With Rice", image: "photos/Pap-Chicken.png", difficulty: "Easy" , servings: 2 , cuisine: "Mediterranean" },
    // other recipes...
];

function createRecipeCards() {
    const recipesGrid = document.querySelector('.recipes-grid');

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeCard.appendChild(recipeImage);

        const recipeName = document.createElement('h2');
        recipeName.className = 'recipe-name';
        recipeName.textContent = recipe.name;
        recipeCard.appendChild(recipeName);

        const viewButton = document.createElement('button');
        viewButton.textContent = 'View';
        viewButton.className = 'view-button';
        viewButton.addEventListener('click', () => {
            window.location.href = `Recepie.html?id=${recipe.id}`;  // navigate to new page with recipe ID in URL
        });
        recipeCard.appendChild(viewButton);

        recipesGrid.appendChild(recipeCard);
    });
}



