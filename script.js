// Add click event listener to all images in the container
document.querySelectorAll('.mx-auto img').forEach(img => {
    img.addEventListener('click', (e) => {
        const src = e.target.src; // Get the source of the clicked image
        const overlay = document.getElementById('overlay');
        const overlayImg = document.getElementById('overlayImg');

        overlayImg.src = src; // Set the source of the overlay image to the clicked image's source
        overlay.classList.add('show'); // Show the overlay
    });
});

// Add click event listener to the overlay to hide it when clicked
document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('overlay').classList.remove('show'); // Hide the overlay
});

