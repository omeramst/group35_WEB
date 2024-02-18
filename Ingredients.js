//nav bar buttons
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");
const signupBtn = document.getElementById("signup");
const cookifyBtn = document.getElementById("imagelogo");
const aboutBtn = document.getElementById("aboutus");
const userinfobtn = document.getElementById("userinfo");
const recipes = document.getElementById("recipes");
const ingredientsBut = document.getElementById("ingredients");


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

const ingredients = [
    { name: "Kiwi", image: `photos/Kiwi.png`, type: "Fruits" },
    { name: "Salmon", image: "photos/salmon.jpeg", type: "Fish" },
    { name: "Basmati Rice", image: "photos/basmati_rice.jpeg", type: "Pantry Essentials"},
    { name: "Carrot", image: "photos/carrot.jpeg", type: "Vegetables" },
    { name: "Butter", image: "photos/butter.jpeg", type: "Dairy & Eggs" },
    { name: "Dijon Mustard", image: "photos/dijon_mustard.jpeg", type: "Pantry Essentials" },
    { name: "Lettuce", image: "photos/Lettuce.jpeg", type: "Vegetables" },
    { name: "Chicken Breast", image: "photos/chicken_breast_new.jpeg", type: "Meat" },
    { name: "Green Apple", image: "photos/Green_Apple.png", type: "Fruits" },
    { name: "Flour", image: "photos/flour_new.jpeg", type: "Pantry Essentials" },
    { name: "Vanilla", image: "photos/vanilla-1.png", type: "Pantry Essentials" },
    { name: "Whipped Cream", image: "photos/whipped cream.jpeg", type: "Dairy & Eggs" },
    { name: "Ground Cumin" , image: "photos/ground_cumin.jpeg", type: "Spices" },
    { name: "Sweet Paprika", image: "photos/sweet_paprika.jpg", type: "Spices" },
    { name: "Olive Oil", image: "photos/olive_oil.jpeg", type: "Pantry Essentials" },
    { name: "Honey", image: "photos/Honey.jpeg", type: "Pantry Essentials" },
    { name: "Chicken Egg", image: "photos/chick_egg_final.jpeg", type: "Dairy & Eggs" },
    { name: "Strawberry", image: "photos/strawberry_new.jpeg", type: "Fruits" },
    { name: "Baking Powder", image: "photos/backing powder.jpeg", type: "Pantry Essentials" },
    { name: "Parmesan Cheese", image: "photos/parmesan_good.jpeg", type: "Dairy & Eggs" },




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
    applyButton.textContent = 'Add';
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

//cookify button
cookifyBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "HomePage.html";
});

//ingredients button
ingredientsBut.addEventListener("click", function (e) {
    e.preventDefault();
    location.reload()
});

//recipes button
recipes.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "Recipes.html";
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

//signup button
signupBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "SignUp.html";
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

//login button
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
