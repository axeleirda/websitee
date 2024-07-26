
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                messageDiv.textContent = 'Passwords do not match!';
                return;
            }

            const users = JSON.parse(localStorage.getItem('users') || '[]');
            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            messageDiv.textContent = 'Registration successful!';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                messageDiv.textContent = 'Login successful!';
                // Redirect to forum page or do something else
            } else {
                messageDiv.textContent = 'Invalid username or password!';
            }
        });
    }
});
