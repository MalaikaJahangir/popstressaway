const bubbleContainer = document.getElementById('bubble-container');

// Function to create bubbles
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Randomize bubble position within the container
    const randomLeft = Math.random() * (bubbleContainer.offsetWidth - 60); // Avoid overflow
    const randomTop = Math.random() * (bubbleContainer.offsetHeight - 60);

    bubble.style.left = `${randomLeft}px`;
    bubble.style.top = `${randomTop}px`;

    // Randomize bubble color
    const colors = ['rgba(135, 206, 250, 0.7)', 'rgba(144, 238, 144, 0.7)', 'rgba(255, 182, 193, 0.7)'];
    bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Play sound and remove bubble when clicked
    bubble.addEventListener('click', () => {
        playPopSound();
        bubble.remove(); // Remove bubble on click
    });

    bubbleContainer.appendChild(bubble);
}

// Function to play pop sound
function playPopSound() {
    const audio = new Audio('new-pop-soundeffect.mp4');
    audio.play();
}

// Generate bubbles every 300 milliseconds (faster)
setInterval(createBubble, 400); // Faster bubble creation (adjust to your liking)
