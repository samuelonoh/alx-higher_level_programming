let button = document.getElementById("button");

button.addEventListener("click", function(e) {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let error = document.getElementById("error")
    let incorrectPassword = document.getElementById("incorrectPassword")
    let invalidEmail = document.getElementById("invalidEmail")
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let userEmail = localStorage.getItem("email");
    let userPassword = localStorage.getItem("password");
    

    if (userEmail !== email.value && userPassword !== password.value) {
        error.style.display = "block"
        password.style.border = "1px solid red";
        email.style.border = "1px solid red";
        setTimeout(() => {
            email.style.border = "1px solid black";
            password.style.border = "1px solid black"
            error.style.display = "none"
        }, 5000);
    }else if(userPassword !== password.value) {
        incorrectPassword.style.display = "block";
        password.style.border = "1px solid red";
        setTimeout(() => {
            incorrectPassword.style.display = "none";
            password.style.border = "1px solid black";
        }, 5000);
    } else if (!email.value.match(emailPattern)) {
        invalidEmail.style.display = "block";
        email.style.border = "1px solid red";
    setTimeout(() => {
        invalidEmail.style.display = "none";
        email.style.border = "1px solid black";
    }, 5000);
} else if(userEmail !== email.value) {
        incorrectEmail.style.display = "block";
        email.style.border = "1px solid red";
        setTimeout(() => {
            incorrectEmail.style.display = "none";
            email.style.border = "1px solid black";
        }, 5000);
    } 
    else {
        password.style.border = "2px solid green";
        email.style.border = "2px solid green";
        setTimeout(() => {
            window.location.replace("./todo.html")
        }, 3000);
    }
    
})