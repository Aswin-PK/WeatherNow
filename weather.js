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

// for DAY..........


const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let day = date.getDay();

dayValue.textContent = `${days[day]}`;


// for TIME..........

let hour = date.getHours();
let minute = date.getMinutes();

if(minute<10)
	minute = `0${minute}`;
if(hour<10)
	hour = `0${hour}`;
if(hour == 00)
	hour = 12;
if(hour > 12){
	timeValue.textContent = `${hour-12}:${minute} PM`;
}
else{
	timeValue.textContent = `${hour}:${minute} AM`;
}


// accessing the weather API using the API key

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


const searchbutton = document.getElementById('searchbutton');
searchbutton.addEventListener('click',()=>{
	var cityname = document.getElementById('searchcity');
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityname.value, options)
	.then(response => response.json())
	.then(response => {
		celsiusvalue.textContent = response.temp;
		humidity.textContent = response.humidity;
		wind.textContent = response.wind_speed;
		console.log(response.temp)
		const sunrisetime= response.sunrise;
		
		const dateObj = new Date(sunrisetime * 1000);
		const actualSunriseTime = dateObj.toTimeString().slice(0, 8);

		sunrise.textContent = actualSunriseTime;

		cloud.textContent = response.cloud_pct;
		feelslike.textContent = response.feels_like;
		sunset.textContent = response.sunset;
		
		city.textContent = cityname.value;
	})
	.catch(err => console.error(err));
});