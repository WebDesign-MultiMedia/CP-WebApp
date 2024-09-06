async function fetchCarData() {
    const url = new URL('https://api.api-ninjas.com/v1/cars');
    
    // Collecting input from the form
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const drive = document.getElementById('drive').value;

    // Append parameters to the URL if they are not empty
    if (make) url.searchParams.append('make', make);
    if (model) url.searchParams.append('model', model);
    if (year) url.searchParams.append('year', year);
    if (drive) url.searchParams.append('drive', drive);

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'sExy1uExgTEUIXGunZIidg==62LTiAFkcZNsZwrg'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok. Status: ' + response.status);
        }

        const cars = await response.json();
        displayCars(cars);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayCars(cars) {
    const container = document.getElementById('carsContainer');
    container.innerHTML = ''; // Clear previous contents

    cars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.innerHTML = `
            <h2>${car.make} ${car.model} ${car.year}</h2>

            <div>Details:</div>
            <div>Drive: ${JSON.stringify(car.drive)}</div>
            <div>Class: ${JSON.stringify(car.class)}</div>
            <div>Fuel Type: ${JSON.stringify(car.fuel_type)}</div>
            <div>Transmission: ${JSON.stringify(car.transmission)}</div>
            <div>Cylinders: ${JSON.stringify(car.cylinders)}</div>
             <div>City MPG: ${JSON.stringify(car.city_mpg)}</div>
              <div>Highway MPG: ${JSON.stringify(car.highway_mpg)}</div>
            <div>Combination MPG: ${JSON.stringify(car.combination_mpg)}</div>
            <div>Displacement: ${JSON.stringify(car.displacement)}</div>
            
            
            

            
        `;
        container.appendChild(carDiv);
    });
}