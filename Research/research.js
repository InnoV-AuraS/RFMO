// Toggle project details visibility when clicked
function toggleDetails(projectId) {
    const details = document.getElementById(projectId);
    
    // Toggle the display of the project details section
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
