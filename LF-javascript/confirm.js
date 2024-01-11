let button = document.getElementById("button");

button.addEventListener("click", function(e) {
    e.preventDefault();
    let email = document.getElementById("email");
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    let incorrectPassword = document.getElementById("incorrectPassword")
    let invalidEmail = document.getElementById("invalidEmail")
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let userEmail = localStorage.getItem("email");
    
    if (email.value ==="" && password1.value ==="" && password2.value ===""){
        incorrectPassword.style.display = "block";
        incorrectPassword.innerText = "Input your email and password"
        email.style.border = "1px solid red";
        password1.style.border = "1px solid red";
        password2.style.border = "1px solid red";
        setTimeout(() => {
            incorrectPassword.style.display = "none";
        email.style.border = "1px solid black";
        password1.style.border = "1px solid black";
        password2.style.border = "1px solid black";
        }, 5000);
        
    }
    else if (!email.value.match(emailPattern)) {
        invalidEmail.style.display = "block";
        email.style.border = "1px solid red";
    setTimeout(() => {
        invalidEmail.style.display = "none";
        email.style.border = "1px solid black";
    }, 5000);
} 
    else if(userEmail !== email.value) {
        incorrectEmail.style.display = "block";
        email.style.border = "1px solid red";
        setTimeout(() => {
            incorrectEmail.style.display = "none";
            email.style.border = "1px solid black";
        }, 5000);
    } else if (password1.value === "" && password2.value === "") {
        required.style.display = "block"
        password1.style.border = "1px solid red";
        password2.style.border = "1px solid red";
        setTimeout(() => {
            required.style.display = "none"
        password1.style.border = "1px solid black";
        password2.style.border = "1px solid black";
        }, 5000);
    }
    else if (password1.value !== "" && password2.value === "") {
        incorrectPassword.innerText = "input a confirm password"
        incorrectPassword.style.display = "block";
        password2.style.border = "1px solid red";
        setTimeout(() => {
            incorrectPassword.style.display = "none";
        password2.style.border = "1px solid black";
        }, 5000);
    }
    else if(password1.value !== password2.value) {
    incorrectPassword.innerText = "New password and Confirm password does not match"
    incorrectPassword.style.display = "block";
    password2.style.border = "1px solid red";
    setTimeout(() => {
        incorrectPassword.style.display = "none";
        password2.style.border = "1px solid black";
    }, 5000);
}
    else {
        if(password1.value === password2.value) {
            localStorage.setItem("password", password1.value);
            password1.style.border = "2px solid green";
            password2.style.border = "2px solid green";
        setTimeout(() => {
            window.location.replace("./todo.html")
        }, 3000);
        }
    }
    
})