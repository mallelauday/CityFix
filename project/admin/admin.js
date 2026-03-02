// ================= Admin Manage Issues JS =================

// DOM Elements
const issuesTable = document.getElementById("issuesTable");

// Function to fetch issues from backend
async function fetchIssues() {
    try {
        // Replace this URL with your backend API endpoint
        const response = await fetch("/api/issues");
        const issues = await response.json();

        // Clear table first
        issuesTable.innerHTML = "";

        issues.forEach(issue => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${issue.id}</td>
                <td>${issue.title}</td>
                <td>${issue.location}</td>
                <td>${issue.status}</td>
                <td>
                    <button class="resolve" onclick="resolveIssue('${issue.id}')">Resolve</button>
                    <button class="delete" onclick="deleteIssue('${issue.id}')">Delete</button>
                </td>
            `;

            // Add subtle animation
            row.style.animation = "fadeIn 0.5s ease";
            issuesTable.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching issues:", error);
    }
}

// Resolve an issue
async function resolveIssue(id) {
    try {
        // Backend API call to update status
        const response = await fetch(`/api/issues/${id}/resolve`, { method: "PUT" });
        if(response.ok){
            alert("Issue resolved successfully!");
            fetchIssues(); // refresh table
        }
    } catch (error) {
        console.error("Error resolving issue:", error);
    }
}

// Delete an issue
async function deleteIssue(id) {
    if(!confirm("Are you sure you want to delete this issue?")) return;

    try {
        // Backend API call to delete
        const response = await fetch(`/api/issues/${id}`, { method: "DELETE" });
        if(response.ok){
            alert("Issue deleted successfully!");
            fetchIssues(); // refresh table
        }
    } catch (error) {
        console.error("Error deleting issue:", error);
    }
}

// Initial fetch
fetchIssues();