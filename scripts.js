 // scripts.js

// Function to show an alert when a project is clicked
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        alert('Project clicked!');
    });
});

// Function to handle smooth scrolling when navigation links are clicked
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
