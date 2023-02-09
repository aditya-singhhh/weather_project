const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '08d9e1acfdmsh99e5ac9de318fd3p1d1455jsn8e5bb0507781',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather= (city)=>{

	city_name.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
	
	console.log(response)
     
	 
	 temp.innerHTML = response.temp
	 temp_block.innerHTML = response.temp
	 min_temp.innerHTML = response.min_temp
     max_temp.innerHTML = response.max_temp
     cloud_pct.innerHTML = response.cloud_pct
     feels_like.innerHTML = response.feels_like
     humidity.innerHTML = response.humidity
	 humidity_block.innerHTML = response.humidity
     wind_speed.innerHTML = response.wind_speed
	 wind_speed_block.innerHTML = response.wind_speed
     wind_degrees.innerHTML = response.wind_degrees
     sunrise.innerHTML = response.sunrise
     //sunset.innerHTML = response.sunset
	})

	.catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getweather(city_input.value)
})

getweather("Bangalore")