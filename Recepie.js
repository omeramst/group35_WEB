//this is the template for the recipe page
// now there is only one recipe, but in the future there will be more
//will be changed to a loop that will create a recipe card for each recipe in the database


class Recipe {
    constructor(id, title, description, ingredients, instructions, image, cuisine, servings, sensitive) {
        this.id = id || '';
        this.title = title || ''
        this.ingredients = ingredients || [];
        this.instructions = instructions || [];
        this.servings = servings || 0;
        this.image = image || '';
        this.cuisine = cuisine || '';
        this.sensitive = sensitive || [];
        this.description = description || '';
    }
}

//consts and event listeners
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");
const signupBtn = document.getElementById("signup");
const cookifyBtn = document.getElementById("imagelogo");
const aboutBtn = document.getElementById("aboutus");
const userinfobtn = document.getElementById("userinfo");
const recipes = document.getElementById("recipes");
const ingredients = document.getElementById("ingredients");
const user = JSON.parse(localStorage.getItem('user'));
const favorite = document.getElementById('FavoriteButton')
localStorage.setItem('recipe', '1');
const recipe = new Recipe(); //here we would get the recipe from the db by the id
const recipeid = JSON.parse(localStorage.getItem('recipe'));

//check if user is logged in
window.onload = function () {
    const logoutbutn = document.getElementById("logout");
    const userinfobtn = document.getElementById("userinfo");
    const loginbutn = document.getElementById("login");
    const signupbutn = document.getElementById("signup");
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        loginbutn.style.display = "none";
        signupbutn.style.display = "none";
        logoutbutn.style.display = "block";
        userinfobtn.style.display = "block";
    } else {
        loginbutn.style.display = "block";
        signupbutn.style.display = "block";
        logoutbutn.style.display = "none";
        userinfobtn.style.display = "none";
    }
}
//signup button
signupBtn.addEventListener("click", function (e) {
    e.preventDefault();
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
//logout button
logoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem('user');
    location.reload()
});
//user info button
userinfobtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "UserInfo.html";
});
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
            location.reload();
        }
    });
});

class User {
    constructor(username, password, email, cuisine, sensitive, saved) {
        this.username = username || '';
        this.password = password || '';
        this.email = email || '';
        this.cuisine = cuisine || [];
        this.sensitive = sensitive || [];
        this.saved = saved || [];
    }
}

favorite.addEventListener('click', function () {
    if (localStorage.getItem('user')) {
        favorite.classList.toggle('checked');
        if (favorite.classList.contains('checked') || null) {
            user.saved.push(recipeid);
            console.log(user.saved);
        } else {
            user.saved.pop(recipeid);
            console.log(user.saved);
        }
    }
});

//recipies button
recipes.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = "Recipes.html";
});

//ingredients button
ingredients.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = "Ingredients.html";
});
