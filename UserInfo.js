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

    //displaying user details
    if (user) {
        document.getElementById("username").value = user.username;
        document.getElementById("password").value = user.password;
        document.getElementById("email").value = user.email;
        if (user.cuisine) {
            user.cuisine.forEach(cuisine => {
                document.getElementById("favoriteCuisine").querySelector(`option[value="${cuisine}"]`).selected = true;
            });
        }
        if (user.sensitive) {
            user.sensitive.forEach(sensitive => {
                document.getElementById("foodSensitivity").querySelector(`option[value="${sensitive}"]`).selected = true;
            });
        }
    }
}

//variables
const logoutbutn = document.getElementById("logout");
const userinfobtn = document.getElementById("userinfo");
const loginbutn = document.getElementById("login");
const signupbutn = document.getElementById("signup");
const user = JSON.parse(localStorage.getItem('user'));
const submit = document.getElementById("submit");
const aboutus = document.getElementById("aboutus");
const cookify = document.getElementById("imagelogo");
const recipes = document.getElementById("recipes");
const ingredients = document.getElementById("ingredients");

//function to logout
logoutbutn.addEventListener("click", function () {
    localStorage.removeItem('user');
    window.location.href = "HomePage.html";
});
// function to go to user info page
userinfobtn.addEventListener("click", function () {
    location.reload();
});
//about us page
aboutus.addEventListener("click", function () {
    window.location.href = "HomePage.html";
});
//cookify logo
cookify.addEventListener("click", function () {
    window.location.href = "HomePage.html";
});


//function submit
submit.addEventListener("click", function (e) {
    e.preventDefault();

    //changing the user details
    console.log(user);
    user.username = document.getElementById("username").value;
    user.password = document.getElementById("password").value;
    user.email = document.getElementById("email").value;
    user.cuisine = getSelectedOptions("favoriteCuisine")
    user.sensitive = getSelectedOptions("foodSensitivity")
    localStorage.setItem('user', JSON.stringify(user));

    //message
    const message = document.getElementById("message");
    message.innerHTML = "Your details have been updated";
    message.style.display = "block";
    message.classList.add('hide');
    setTimeout(() => {
        message.classList.remove('hide');
        message.innerHTML = "";
        message.style.display = "none";
    }, 1000);

});
//ingredient button
ingredients.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "Ingredients.html";
});
//recipes button
recipes.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "Recipes.html";
});

function getSelectedOptions(selectId) {
    const selectElement = document.getElementById(selectId);
    const selectedOptions = Array.from(selectElement.options)
        .filter(option => option.selected)
        .map(option => option.value);
    return selectedOptions;
}

