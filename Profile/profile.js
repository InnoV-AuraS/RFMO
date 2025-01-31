
function toggleDashboard() {
    const dashboard = document.getElementById('dashboard');
    dashboard.classList.toggle('open');


document.getElementById('newProjectForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var projectName = document.getElementById('projectName').value;
    var projectDescription = document.getElementById('projectDescription').value;
    
    // Add new project to the table
    var table = document.getElementById('projectsTable');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = projectName;
    cell2.innerHTML = 'Pending Approval';

    // Clear form
    document.getElementById('projectName').value = '';
    document.getElementById('projectDescription').value = '';

    alert('Project application submitted successfully!');
});

function checkProjectStatus() {
    var projectName = document.getElementById('checkProjectName').value;
    var table = document.getElementById('projectsTable');
    var status = 'Not Found';

    for (var i = 1; i < table.rows.length; i++) {
        if (table.rows[i].cells[0].innerHTML.toLowerCase() === projectName.toLowerCase()) {
            status = table.rows[i].cells[1].innerHTML;
            break;
        }
    }

    document.getElementById('statusResult').innerHTML = 'Status: ' + status;
}

// Function to handle profile picture upload
function handleProfilePictureUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profilePicture').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

// Add event listener for profile picture upload
document.getElementById('profilePictureUpload').addEventListener('change', handleProfilePictureUpload)};
