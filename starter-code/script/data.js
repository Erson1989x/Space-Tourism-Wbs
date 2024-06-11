/*const destinationName = document.getElementById('destination-name');
const destinationDescription = document.getElementById('destination-description');
const destinationDistance = document.getElementById('destination-distance-planets');
const destinationTravel = document.getElementById('destination-travel');
const destinationImage = document.getElementById('destination-img');

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('./script/data.json');
    const data = await response.json();

    const destination = data.destinations.find(destination => destination.name === 'Europa');

    destinationName.textContent = destination.name;
    destinationDescription.textContent = destination.description;
    destinationDistance.textContent = destination.distance;
    destinationTravel.textContent = destination.travel;
    destinationImage.src = destination.images.webp;
  } catch (error) {
    console.error(error);
  }
});*/

/*

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('./script/data.json');
    const data = await response.json();

    const destinationElement = document.getElementById('destinations');
    const destinationNameAttribute = destinationElement.getAttribute('data-destination');
    const destination = data.destinations.find(destination => destination.name === destinationNameAttribute);

    if (destination) {
      // Destination found, update the elements
      const destinationName = document.getElementById('destination-name');
      const destinationDescription = document.getElementById('destination-description');
      const destinationDistance = document.getElementById('destination-distance-planets');
      const destinationTravel = document.getElementById('destination-travel');
      const destinationImage = document.getElementById('destination-img');

      destinationName.textContent = destination.name;
      destinationDescription.textContent = destination.description;
      destinationDistance.textContent = destination.distance;
      destinationTravel.textContent = destination.travel;
      destinationImage.src = destination.images.webp || destination.images.png;
    } else {
      // Destination not found
      console.error('Destination not found:', destinationNameAttribute);
      console.error('Available destinations:', data.destinations.map(destination => destination.name));
    }
  } catch (error) {
    console.error(error);
  }
});*/

const destinationName = document.getElementById('destination-name');
const destinationDescription = document.getElementById('destination-description');
const destinationDistance = document.getElementById('destination-distance-planets');
const destinationTravel = document.getElementById('destination-travel');
const destinationImage = document.getElementById('destination-img');

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('./script/data.json');
    const data = await response.json();

    const destinationElement = document.getElementById('destinations');
    const destinationNameAttribute = destinationElement.getAttribute('data-destination');
    const destination = data.destinations.find(destination => destination.name === destinationNameAttribute);

    if (destination) {
      // Destination found, update the elements
      destinationName.textContent = destination.name;
      destinationDescription.textContent = destination.description;
      destinationDistance.textContent = destination.distance;
      destinationTravel.textContent = destination.travel;
      destinationImage.src = destination.images.webp || destination.images.png;
    } else {
      // Destination not found
      console.error('Destination not found:', destinationNameAttribute);
      console.error('Available destinations:', data.destinations.map(destination => destination.name));
    }
  } catch (error) {
    console.error(error);
  }
});