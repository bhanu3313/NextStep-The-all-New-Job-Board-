document.addEventListener("DOMContentLoaded", function() {
    // DOM elements
    const profileForm = document.getElementById("profile-form");
    const profileDisplay = document.getElementById("profile-display");

    // Event listener for form submission
    document.getElementById('sign-in-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        // Simple authentication logic (replace with actual authentication logic)
        if (username === 'user' && password === 'password') {
            window.location.href = 'index.html';
        } else {
            document.getElementById('error-message').style.display = 'block';
        }
    });
    
    profileForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form data
        const formData = new FormData(profileForm);

        // Create profile object
        const profile = {
            studentId: formData.get("student-id"),
            name: formData.get("name"),
            branch: formData.get("branch"),
            department: formData.get("department"),
            experiences: formData.get("experiences"),
            resume: formData.get("resume"),
            linkedinUrl: formData.get("linkedin-url"),
            githubUrl: formData.get("github-url"),
            certifications: formData.get("certifications")
        };

        // Display profile information
        displayProfile(profile);
    });

    // Function to display profile information
    function displayProfile(profile) {
        // Create profile HTML
        const profileHTML = `
            <div>
                <h3>Student ID: ${profile.studentId}</h3>
                <p>Name: ${profile.name}</p>
                <p>Branch: ${profile.branch}</p>
                <p>Department: ${profile.department}</p>
                <p>Experiences: ${profile.experiences}</p>
                <p>Resume: <a href="${profile.resume}" target="_blank">View Resume</a></p>
                <p>LinkedIn URL: <a href="${profile.linkedinUrl}" target="_blank">LinkedIn Profile</a></p>
                <p>GitHub Repository URL: <a href="${profile.githubUrl}" target="_blank">GitHub Repository</a></p>
                <p>Certifications: <a href="${profile.certifications}" target="_blank">View Certifications</a></p>
            </div>
        `;

        // Append profile HTML to profile display
        profileDisplay.innerHTML = profileHTML;
    }
});
