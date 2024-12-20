// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', () => {
    // Create a button to toggle dark mode
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle Dark Mode';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.padding = '10px 20px';
    toggleButton.style.backgroundColor = '#333';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';
    document.body.appendChild(toggleButton);

    // Add event listener to toggle dark mode
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    // Optionally, you can send this data to a server or an email service.
});
