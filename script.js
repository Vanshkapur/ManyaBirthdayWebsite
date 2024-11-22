let confettiRadius = 200; // Initial radius for confetti spread
let confettiAmount = 20; // Initial number of confetti pieces

// Function to create a single piece of confetti
function createSingleConfetti(x, y) {
  const colors = ['#FF5733', '#FFBD33', '#75FF33', '#33FFBD', '#3375FF', '#FF33A8', '#F3FF33'];
  const confetti = document.createElement('div');
  const size = Math.random() * 12 + 8; // Random size for confetti

  confetti.style.position = 'absolute';
  confetti.style.width = `${size}px`;
  confetti.style.height = `${size}px`;
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.borderRadius = '50%';
  confetti.style.top = `${y}px`;
  confetti.style.left = `${x}px`;
  confetti.style.animation = 'fall 2.5s ease-out forwards';
  document.body.appendChild(confetti);

  // Remove confetti after animation
  setTimeout(() => {
    confetti.remove();
  }, 2500);
}

// Function to create a burst of confetti
function createConfettiBurst(event) {
  for (let i = 0; i < confettiAmount; i++) {
    const offsetX = (Math.random() - 0.5) * confettiRadius * 2; // Random horizontal spread
    const offsetY = (Math.random() - 0.5) * confettiRadius * 2; // Random vertical spread
    createSingleConfetti(event.clientX + offsetX, event.clientY + offsetY);
  }

  // Increase the radius and amount of confetti with each click
  confettiRadius += 50; // Increase the spread radius
  confettiAmount += 10; // Increase the number of confetti pieces
}

// Add event listener for clicks
document.addEventListener('click', createConfettiBurst);

// Add falling animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
@keyframes fall {
  to {
    transform: translateY(700px) rotate(720deg);
    opacity: 0;
  }
}
`;
document.head.appendChild(styleSheet);
