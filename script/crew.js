const crewName = document.getElementById('crew-name');
const crewImage = document.getElementById('crew-img');
const crewRole = document.getElementById('crew-role');
const crewDescription = document.getElementById('crew-description');

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('./script/data.json');
        const data = await response.json();

        const crewElement = document.getElementById('crew');
        const crewNameAttribute = crewElement.getAttribute('data-crew');
        const crew = data.crew.find(crew => crew.role === crewNameAttribute);

        if (crew) {
            // Crew found, update the elements
            crewName.textContent = crew.name;
            crewImage.src = crew.images.webp || crew.images.png;
            crewRole.textContent = crew.role;
            crewDescription.textContent = crew.bio;
        } else {
            // Crew not found
            console.error('Crew not found:', crewNameAttribute);
            console.error('Available crew:', data.crew.map(crew => crew.name));
        }
    } catch (error) {
        console.error(error);
    }
})