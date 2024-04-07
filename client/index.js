// rain animation
const container = document.getElementById('rainBackgroundContainer');

// Create raindrops
for (let i = 0; i < 50; i++) {
    const drop = document.createElement('div');
    drop.classList.add('raindrop');

    const xPosition = Math.random() * 100;
    const dropWidth = Math.random() * 1.5;
    const dropHeight = Math.random() * (80 - 20) + 20; 
    const animationDuration = Math.random() * (0.7 - 0.3) + 0.3; 

    drop.style.left = `${xPosition}%`;
    drop.style.width = `${dropWidth}px`;
    drop.style.height = `${dropHeight}px`;
    drop.style.opacity = Math.random();
    drop.style.animationDuration = `${animationDuration}s`;
    drop.style.animationDelay = `${Math.random() * 2}s`;

    container.appendChild(drop);
}