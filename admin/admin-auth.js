// ================= Admin Login JS =================

// DOM Elements
const adminLoginForm = document.getElementById("adminLoginForm");

// Handle form submit
adminLoginForm.addEventListener("submit", async function(e){
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
        // Send credentials to backend
        const response = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if(response.ok){
            // Store token/session returned from backend
            sessionStorage.setItem("adminToken", data.token);
            alert("Admin Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            alert(data.message || "Invalid admin credentials!");
        }
    } catch (error) {
        console.error("Error logging in:", error);
        alert("Server error. Please try again later.");
    }
});