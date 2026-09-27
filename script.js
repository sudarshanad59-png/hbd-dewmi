function showSurprise() {
    const giftBox = document.querySelector(".gift-box");
    const surprise = document.getElementById("surprise");
    
    // Hide gift box
    giftBox.classList.add("hidden");
    
    // Show surprise with animation
    surprise.classList.remove("hidden");
}

// Add floating hearts
function createHeart() {
    const heartContainer = document.querySelector('.heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);
