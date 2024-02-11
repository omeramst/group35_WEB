

const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    const popup = document.getElementById("loginPopup");
    const closeButton = document.getElementById("closePopup");
    const submitButton = document.getElementById("loginSubmit");
    popup.style.display = "flex";


    closeButton.addEventListener("click", function (e) {
        e.preventDefault();
        popup.style.display = "none";
    });
    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("submit");
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
         if(email === '' || password === ''){
            alert('Please fill in all fields')}
         else{
             /* here will be no validation only db check */
           console.log(email, password);
           popup.style.display = "none";
           const logoutbutn = document.getElementById("logout");
           const userinfobtn = document.getElementById("userinfo");
           const loginbutn = document.getElementById("login");
           const signupbutn = document.getElementById("signup");
           loginbutn.style.display = "none";
           signupbutn.style.display = "none";
           logoutbutn.style.display = "block";
           userinfobtn.style.display = "block";
             }
    });
});