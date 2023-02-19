const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const sunrise = document.getElementById('sunrise');
const cloud = document.getElementById('cloud');
const feelslike = document.getElementById('feelslike');
const sunset = document.getElementById('sunset');

const celsiusvalue = document.getElementById('celsiusvalue');
const city = document.getElementById('city');




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f00f458595msh7c60f7a3ea78171p1a7606jsnd67caf7695f3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// by default city is set to bangalore............

city.textContent = 'Bangalore';


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then(response => {
		celsiusvalue.textContent = response.temp;

		humidity.textContent = response.humidity;
		wind.textContent = response.wind_speed;
		sunrise.textContent = response.sunrise;
		cloud.textContent = response.cloud_pct;
		feelslike.textContent = response.feels_like;
		sunset.textContent = response.sunset;
		console.log(response);
	})
	.catch(err => console.error(err));




function findTemperature(){
	const cityname = document.getElementById('searchcity');
	city = cityname.value;
	// console.log(city);

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		celsiusvalue.textContent = response.temp;

		humidity.textContent = response.humidity;
		wind.textContent = response.wind_speed;
		sunrise.textContent = response.sunrise;
		cloud.textContent = response.cloud_pct;
		feelslike.textContent = response.feels_like;
		sunset.textContent = response.sunset;
		console.log(response);
	})
	.catch(err => console.error(err));
}