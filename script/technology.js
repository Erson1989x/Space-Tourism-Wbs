const vehicleName = document.getElementById('vehicle-name');
const vehicleDescription = document.getElementById('vehicle-description');
const landscapeImage = document.getElementById('vehicle-img-landscape');
const portraitImage = document.getElementById('vehicle-img-portrait');

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('./script/data.json');
        const data = await response.json();

        const technologyElement = document.getElementById('technology');
        const technologyNameAttribute = technologyElement.getAttribute('data-technology');
        const technology = data.technology.find(technology => technology.name === technologyNameAttribute);

        if (technology) {
            // Technology found, update the elements
            vehicleName.textContent = technology.name;
            vehicleDescription.textContent = technology.description;
            landscapeImage.src = technology.images.landscape;
            portraitImage.src = technology.images.portrait;
        } else {
            // Technology not found
            console.error('Technology not found:', technologyNameAttribute);
            console.error('Available technologies:', data.technology.map(technology => technology.name));
        }
    } catch (error) {
        console.error(error);
    }



})