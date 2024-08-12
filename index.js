// Rain animation
const rainBackgroundContainer = document.getElementById("rainBackgroundContainer");

// rain drops 
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

// philly info box
let moods = ["happy", "tired"]
let moodElement = document.querySelector('#mood')
let currentTime = new Date().toTimeString().split(' ')[0];
let morningTime = "08:00:00" // 8am
let eveningTime = "17:00:00"; //5pm


if(currentTime >= morningTime && currentTime <= eveningTime){
    moodElement.innerHTML = `${moods[0]} <br>`
}else{
    moodElement.innerHTML = `${moods[1]} <br>`
}

// Function to update the time
const updateTime = () => {
    let currentTime = new Date().toTimeString().split(' ')[0];
    let timeInPhiladelphia = document.querySelector('#time');
    timeInPhiladelphia.innerHTML = `<br><br>${currentTime}`;
}
updateTime();
setInterval(updateTime, 1000);



// card creation
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


// // play audio
// // audio
// let CHAINSAW_MAN_SONG = "Chainsaw Man Opening - KICK BACK_tv.mp3";
// let RENT_A_GIRLFRIEND_SONG = "rentagirlfriendOP.mp3";

// let arrayOfSongs = [CHAINSAW_MAN_SONG, RENT_A_GIRLFRIEND_SONG];

// let playRandomSong = () => {
//     try {

//         let soundTextUpdate = document.querySelector(".soundStatus")
//         let randomIndex = Math.floor(Math.random() * arrayOfSongs.length);
//         let randomSong = arrayOfSongs[randomIndex];
//         let soundIsPlaying;
        
//         let audio = new Audio(randomSong);
//         audio.volume = 0.5; // Set the volume to 50%
        
//         audio.play().catch(() => {
//             document.addEventListener("click", () => audio.play(), { once: true });
//         });
    
//         // When the song ends, play another random song
//         audio.addEventListener('ended', playRandomSong);
        
        
//         if(!audio.play()){
//             console.log("error")
//             soundTextUpdate.textContent = "SOUND OFF. an error occured, sorry"
//             soundTextUpdate.style.color = "red"
//             soundTextUpdate.style.fontSize = "16px" 
//             soundIsPlaying = false
//         }else{
//             console.log("playing")
//             soundTextUpdate.textContent = "SOUND ON"
//             soundTextUpdate.style.color = "lime"
//             soundTextUpdate.style.fontSize = "16px" 
//             soundIsPlaying = true

//         }
//     } catch(error) {
//         console.log(error);

//     }
// };

try{
    let soundTextUpdate = document.querySelector(".soundStatus")
    let song  = "indoor-hard-rain-sound-190883.mp3"
    let audio = new Audio(song);
        audio.volume = 0.4; 
        
        audio.play().catch(() => {
            document.addEventListener("click", () => audio.play(), { once: true });
        });

        
        if(!audio.play()){
            console.log("error")
            soundTextUpdate.textContent = "SOUND OFF"
            soundTextUpdate.style.color = "red"
            soundTextUpdate.style.fontSize = "16px" 
            soundTextUpdate.style.marginTop = "10px"
            soundIsPlaying = false
        }else{
            console.log("playing")
            soundTextUpdate.textContent = "SOUND ON"
            soundTextUpdate.style.color = "lime"
            soundTextUpdate.style.fontSize = "16px" 
            soundIsPlaying = true

        }

}catch(err){
    console.log("Errore", err)
}

