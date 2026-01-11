// script.js

const toggleButton = document.getElementById('theme-toggle');
const icon = toggleButton.querySelector('.icon');
const storedTheme = localStorage.getItem('theme');

// 1. On Load: Check if user previously chose LIGHT mode
if (storedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    updateIcon('light');
} else {
    // Default to Dark (No attribute needed because :root is now dark, 
    // or we can set it explicitly to be safe)
    document.documentElement.setAttribute('data-theme', 'dark');
    updateIcon('dark');
}

// 2. Event Listener for the button
toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = 'light';

    // If currently light, switch to dark
    if (currentTheme === 'light') {
        targetTheme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme); // Save preference
    updateIcon(targetTheme);
});

// 3. Helper to change the icon
function updateIcon(theme) {
    if (theme === 'light') {
        icon.innerHTML = '&#9788;'; // Sun symbol (for light mode)
    } else {
        icon.innerHTML = '&#9790;'; // Moon symbol (for dark mode)
    }
}