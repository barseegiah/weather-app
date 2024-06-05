
//Load DOM before script
document.addEventListener('DOMContentLoaded', () => {
    
    //Get html element
    // const searchbtn = document.getElementById('searchBtn').disabled = true;
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const form = document.querySelector('form');

    function weather(){

        //Store input value
        let userInput = document.querySelector('#searchInput').value;
        
        //store api key into a variable
        const apiKEY = '9f72a35202d3629e1833a38dcd371b5b';
        
        //Condition for input field
        if(userInput != ''){

        document.getElementById('message').innerHTML = 'Location';
        //Fetch api
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + apiKEY)
        .then(function (response) {
            return response.json()
        })
        .then(function (data){

            location.innerHTML = data.name;
            temperature.innerHTML = data.main.temp;
            description.innerHTML = data.weather[0].description;
            console.log(data)
        })
        .catch(function() {
            console.log('Error')
        })}else{
            document.getElementById('message').innerHTML = 'Invalid input'
        }
    }

    //event listener for form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        //invoking weather function upon submission
        weather();
        
    })
})