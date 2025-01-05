// Captcha functionality
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const captchaLength = 6;
    let captcha = '';
    for (let i = 0; i < captchaLength; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

function refreshCaptcha() {
    document.getElementById('captcha-display').textContent = generateCaptcha();
}

// Initial CAPTCHA generation
refreshCaptcha();

// Add event listener for the refresh button
document.getElementById('refresh-captcha').addEventListener('click', refreshCaptcha);

// Form submission validation and redirection
document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const userId = document.getElementById('userid').value;
    const password = document.getElementById('password').value;
    const captchaInput = document.getElementById('captcha-input').value;
    const captchaDisplay = document.getElementById('captcha-display').textContent;

    // Check if User ID, Password, and CAPTCHA are correct
    if (userId && password && captchaInput === captchaDisplay) {
        // Redirect to another page (e.g., dashboard.html)
        window.location.href = 'dashboard/dashboard.html';
    } else {
        alert('Invalid CAPTCHA. Please try again.');
        refreshCaptcha(); // Refresh CAPTCHA on failure
    }
});
