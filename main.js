// Create floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    particle.style.width = particle.style.height = Math.random() * 6 + 2 + 'px';
    document.getElementById('particles').appendChild(particle);
}

// Create multiple particles
for (let i = 0; i < 15; i++) {
    createParticle();
}

// Function to change profile image (placeholder for actual image upload)
function changeImage() {
    const img = document.querySelector('.profile-image');
    img.style.backgroundImage = "url('https://via.placeholder.com/120x120/667eea/ffffff?text=YN')";
}

// Function to handle resume download/view
function downloadResume() {
    // Replace with your actual resume URL
    const resumeUrl = 'path/to/your/resume.pdf';
    window.open(resumeUrl, '_blank');
}

// Function to open notes project
function openNotes() {
    // Replace with your actual notes project URL
    const notesProjectUrl = 'notes-index.html';
    window.open(notesProjectUrl, '_blank');
}

function openProject() {
    // Replace with your actual notes project URL
    const notesProjectUrl = 'path/to/your/notes-project/index.html';
    window.open(notesProjectUrl, '_blank');
}

// Add subtle hover effects to container
const container = document.querySelector('.container');
container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    
    container.style.transform = `perspective(1000px) rotateX(${deltaY * 2}deg) rotateY(${deltaX * 2}deg)`;
});

container.addEventListener('mouseleave', () => {
    container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});