// Load DOM before script
document.addEventListener('DOMContentLoaded', () => {
            
    // Get html element
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const form = document.querySelector('form');

    function weather() {

        // Store input value
        let userInput = document.querySelector('#searchInput').value;
        
        // Store API key into a variable
        const apiKEY = '9f72a35202d3629e1833a38dcd371b5b';
        
        // Condition for input field
        if (userInput != '') {

            document.getElementById('message').innerHTML = 'Location';
            // Fetch API
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + apiKEY)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {

                    // Convert temperature from Kelvin to Celsius
                    let tempInCelsius = data.main.temp - 273.15;

                    location.innerHTML = data.name;
                    temperature.innerHTML = tempInCelsius.toFixed(2) + ' °C'; // Display temperature in Celsius
                    description.innerHTML = data.weather[0].description;
                    console.log(data);
                })
                .catch(function() {
                    console.log('Error');
                });
        } else {
            document.getElementById('message').innerHTML = 'Invalid input';
        }
    }

    // Event listener for form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Invoking weather function upon submission
        weather();
    });
});