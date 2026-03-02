// Worker login form
const workerLoginForm = document.getElementById("workerLoginForm");

workerLoginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("workerEmail").value.trim();
    const password = document.getElementById("workerPassword").value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    try {
        // Replace with your backend API endpoint
        const response = await fetch("/api/worker/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Save token or worker info in sessionStorage/localStorage
            sessionStorage.setItem("workerToken", data.token);
            sessionStorage.setItem("workerName", data.name);
            alert("Login successful!");
            window.location.href = "dashboard.html";
        } else {
            alert(data.message || "Invalid credentials!");
        }
    } catch (error) {
        console.error(error);
        alert("Server error. Try again later.");
    }
});