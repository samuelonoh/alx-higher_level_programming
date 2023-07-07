let button = document.getElementById("button");

button.addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.getElementById("name");
    let trimName = name.value.split(" ").join("");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let phone = document.getElementById("phone");
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let gender = document.form.gender;
    let nameFormat = /^[A-Za-z]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let input = document.querySelectorAll(".input");
    let small = document.getElementById("small");
    let smallPhone = document.getElementById("smallPhone");
    let smallEmail = document.getElementById("smallEmail");
    let smallPassword = document.getElementById("smallPassword");
    let smallCheck = document.getElementById("smallCheck")
    let userEmail = localStorage.getItem("email");

    

    for (const item of input) {
        if (item.value === "") {
            item.style.border = "1px solid red";
            setTimeout(() => {
                item.style.border = "1px solid black";
            }, 5000);
        } else if (!trimName.match(nameFormat)) {
            small.style.display = "block";
            name.style.border = "1px solid red";
            setTimeout(() => {
                small.style.display = "none";
                item.style.border = "1px solid black";
            }, 5000);
        } else if (!email.value.match(emailPattern)) {
            smallEmail.style.display = "block";
            email.style.border = "1px solid red";
            setTimeout(() => {
                smallEmail.style.display = "none";
                email.style.border = "1px solid black";
            }, 5000);
        } else if (phone.value.length !== 11 && ("+" + phone.value).length !== 14) {
            smallPhone.style.display = "block";
            phone.style.border = "1px solid red";
            setTimeout(() => {
                smallPhone.style.display = "none";
                phone.style.border = "1px solid black";
            }, 5000);
        } else if (!male.checked && !female.checked) {
            smallCheck.style.display = "block";
            setTimeout(() => {
                smallCheck.style.display = "none"
            }, 5000)
        } else if (password.value.length < 8){
            smallPassword.style.display = "block";
            password.style.border = "1px solid red";
            setTimeout(() => {
                smallPassword.style.display = "none";
                password.style.border = "1px solid black";
            }, 5000);
        } else if (userEmail === email.value) {
            exists.style.display = "block";
            setTimeout(() => {
                exists.style.display = "none"
                window.location.replace("./login.html")
            }, 5000);
        } else {
            localStorage.setItem("name", name.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("phone", phone.value);
            localStorage.setItem("password", password.value);
            for (const gen of gender) {
                if (gen.checked) {
                    localStorage.setItem("gender", gen.value)
                }
            }
            window.location.replace("./todo.html");
        }
    }
});