// Rain animation
const rainBackgroundContainer = document.getElementById("rainBackgroundContainer");

for (let i = 0; i < 50; i++) {
    const raindrop = document.createElement("div");
    raindrop.classList.add("raindrop");

    const leftPosition = 100 * Math.random();
    const width = 1.5 * Math.random();
    const height = 20 * Math.random() + 20;
    const animationDuration = 0.4 * Math.random() + 0.3;

    raindrop.style.left = `${leftPosition}%`;
    raindrop.style.width = `${width}px`;
    raindrop.style.height = `${height}px`;
    raindrop.style.opacity = Math.random();
    raindrop.style.animationDuration = `${animationDuration}s`;
    raindrop.style.animationDelay = `${2 * Math.random()}s`;

    rainBackgroundContainer.appendChild(raindrop);
}



document.addEventListener('DOMContentLoaded', () => {
    // Function to create each card element
    const createCard = ({ title, description, link, imgSrc, btnText }) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <a href="${link}" target="_blank">
                <img src="${imgSrc}" alt="${title}">
            </a>
            <div class="card-content">
                <h2>${title}</h2>
                <p>${description}</p>
                <a href="${link}" class="card-btn">${btnText}</a>
            </div>
        `;
        return card;
    };

    // Function to add cards to the boxes container
    const addCards = (data) => {
        const boxes = document.getElementById('boxes');
        data.forEach(item => {
            const card = createCard(item);
            card.style.height = '385px'; // Placeholder height
            boxes.appendChild(card);
            observer.observe(card);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                card.style.height = ''; // Remove placeholder height
                observer.unobserve(card);
            }
        });
    }, { rootMargin: '100px' });


    // fetch card data from cardData.json
    const fetchCardData = async () => {
        try {
            const response = await fetch('/api/cardData.json');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const cardData = await response.json();
            addCards(cardData);
        } catch (error) {
            console.error('Error fetching card data:', error);
        }
    };

    // Fetch card data and add to the page
    fetchCardData();
});
