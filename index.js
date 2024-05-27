// rain animation
const e = document.getElementById("rainBackgroundContainer");
        for (let n = 0; n < 50; n++) {
            const t = document.createElement("div");
            t.classList.add("raindrop");
            const a = 100 * Math.random(),
                o = 1.5 * Math.random(),
                r = 20 * Math.random() + 20,
                c = .4 * Math.random() + .3;
            t.style.left = `${a}%`,
            t.style.width = `${o}px`,
            t.style.height = `${r}px`,
            t.style.opacity = Math.random(),
            t.style.animationDuration = `${c}s`,
            t.style.animationDelay = `${2 * Math.random()}s`,
            e.appendChild(t);
        }
        // making every image lazy load

        document.addEventListener('DOMContentLoaded', () => {
            const imgElements = document.querySelectorAll('img');
            imgElements.forEach(img => {
                img.loading = 'lazy';
            });

            // card data
            const cardData = [
                {
                    title: "Shikai!",
                    description: "Shikai - Watch High Quality Anime Online. You can watch anime online free in HD without Ads. Best place for free find and one-click anime.",
                    link: "https://shikaishikai.vercel.app/home",
                    imgSrc: "/assets/shikaishikai.jpg",
                    btnText: "watch Shikai!"
                },
                {
                    title: "Shawn's Domain!",
                    description: "Learn a little more about me! also sorry if this website lags lol",
                    link: "https://shawnreact.vercel.app/",
                    imgSrc: "/assets/shawnsdomain.jpg",
                    btnText: "go to Shawn's Domain!"
                },
                {
                    title: "Path-finding-visualizer",
                    description: "I built an interactive pathfinding visualizer using vanilla JavaScript.",
                    link: "https://path-finding-visualizer-theta.vercel.app/",
                    imgSrc: "/assets/pathfindingvisualizer.jpg",
                    btnText: "go to PFV project!"
                },
                {
                    title: "Manga Website!",
                    description: "Free Manga website coming soon :) So in the meantime, go watch anime on Shikai",
                    link: "https://shikaishikai.vercel.app/home",
                    imgSrc: "/assets/shikaishikai.jpg",
                    btnText: "watch anime on Shikai!"
                },
                {
                    title: "Shikai-mini",
                    description: "mini version of the original website Shikai! Free anime with no ADs",
                    link: "https://shikai-mini.vercel.app/",
                    imgSrc: "/assets/shikai-mini.jpg",
                    btnText: "watch anime on shikai-mini!"
                }
            ];

            // create each card
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

            // adding cards to the boxes container
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

            addCards(cardData);
        });