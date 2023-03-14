const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const sunrise = document.getElementById('sunrise');
const cloud = document.getElementById('cloud');
const feelslike = document.getElementById('feelslike');
const sunset = document.getElementById('sunset');

const celsiusvalue = document.getElementById('celsiusvalue');
const city = document.getElementById('city');

const timeValue = document.getElementById('time');
const dayValue = document.getElementById('date');

// printing the current date and times by using the Date object...........

const date = new Date(); 

// for DAY calculation..........
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let day = date.getDay();
dayValue.textContent = `${days[day]}`;


// for TIME..........
let hour = date.getHours();
let minute = date.getMinutes();


if(hour == 00)
	hour = 12;

if(hour > 12){
	// converting time format like 13:00 PM  to 1:00 PM
	timeValue.textContent = `${(hour-12).toString().padStart(2, '0')}:${(minute).toString().padStart(2, '0')} PM`;    
}
else{
	timeValue.textContent = `${(hour-12).toString().padStart(2, '0')}:${(minute).toString().padStart(2, '0')} AM`;
}


// accessing the weather API using the API key

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f00f458595msh7c60f7a3ea78171p1a7606jsnd67caf7695f3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const cityname = document.getElementById('searchcity');
const searchbutton = document.getElementById('searchbutton');

searchbutton.addEventListener('click', ()=>{

	getWeather(cityname.value);  // calling getWeather with the value entered in the textbox..

});


function getWeather(cityname){

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityname, options)
	.then(response => response.json())
	.then(response => {
		celsiusvalue.textContent = response.temp;
		humidity.textContent = `${response.humidity} %`;
		wind.textContent = `${response.wind_speed} m/s`;

		const unixTime1 = response.sunrise;
		const date1 = new Date(unixTime1 * 1000);
		const hours1 = date1.getHours().toString().padStart(2, '0'); // Get hours and pad with leading zero if needed
		const minutes1 = date1.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if needed
		const timeValue1 = `${hours1}:${minutes1} AM`;
		sunrise.textContent = timeValue1;

		const unixTime2 = response.sunset;
		const date2 = new Date(unixTime2 * 1000);
		const hours2 = date2.getHours().toString().padStart(2, '0'); // Get hours and pad with leading zero if needed
		const minutes2 = date2.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if needed
		const timeValue2 = `${(hours2-12).toString().padStart(2, '0')}:${(minutes2).toString().padStart(2, '0')} PM`;
		sunset.textContent = timeValue2;
		

		cloud.textContent = `${response.cloud_pct} %`;
		feelslike.textContent = `${response.feels_like}'C`;
		
		city.textContent = cityname;
	})
	.catch(err => console.error(err));
}

getWeather('Bangalore'); 	// By default cityname is set to Bangalore