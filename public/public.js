// ================= REPORT ISSUE =================
document.getElementById("reportForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let location = document.getElementById("location").value;
    let description = document.getElementById("description").value;

    let issue = {
        id: Date.now(),
        title,
        category,
        location,
        description,
        status: "Pending"
    };

    let issues = JSON.parse(localStorage.getItem("issues")) || [];
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));

    alert("Issue Submitted Successfully!");
    window.location.href = "view-issue.html";
});


// ================= VIEW ISSUES =================
if(document.getElementById("issueTable")){
    let issues = JSON.parse(localStorage.getItem("issues")) || [];
    let table = document.getElementById("issueTable");

    issues.forEach(issue => {
        table.innerHTML += `
            <tr>
                <td>${issue.id}</td>
                <td>${issue.title}</td>
                <td>${issue.location}</td>
                <td>${issue.status}</td>
            </tr>
        `;
    });
}


// ================= TRACK ISSUE =================
document.getElementById("trackForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let id = document.getElementById("trackId").value;
    let issues = JSON.parse(localStorage.getItem("issues")) || [];

    let found = issues.find(issue => issue.id == id);

    if(found){
        alert("Status: " + found.status);
    } else {
        alert("Issue Not Found!");
    }
});