// Script for smooth scroll effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function downloadCV() {
    window.location.href = '/docs/Uwagboe Emmanuel CV.pdf';
}

function hireMe() {
    alert("Thank you for your interest! I'll get back to you soon.");
}

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert("Please fill out all required fields.");
        return false;
    }

    console.log("Form submitted with the following data:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    alert("Form submitted! Thank you for reaching out.");

    return true; // Allow the form to submit if validation passes
}

document.querySelector('button[type="button"][value="Download CV"]').addEventListener('click', downloadCV);
document.querySelector('button[type="button"][value="Hire Me"]').addEventListener('click', hireMe);

document.getElementById('contactForm').addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent the form from submitting if validation fails
    }
});
