// ================= USER REGISTER =================
document.getElementById("registerForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({ email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");
    window.location.href = "login.html";
});


// ================= USER LOGIN =================
document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(user => user.email === email && user.password === password);

    if(validUser){
        localStorage.setItem("currentUser", email);
        alert("Login Successful!");
        window.location.href = "report.html";
    } else {
        alert("Invalid Credentials!");
    }
});