const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '08d9e1acfdmsh99e5ac9de318fd3p1d1455jsn8e5bb0507781',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const getweather= (city)=>{
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
	.then(response => response.json())
	.then((response) => {
	
	console.log(response)
	 city_name.innerHTML = response.location.name
	 region.innerHTML = response.location.region
	 temp.innerHTML = response.current.temp_c
	 temp_block.innerHTML = response.current.temp_c
	 feel.innerHTML = response.current.feelslike_c
     uv.innerHTML = response.current.uv
	 wind_speed.innerHTML = response.current.wind_kph
	 wind_speed_block.innerHTML = response.current.wind_kph
     wind_degrees.innerHTML = response.current.wind_degree
     wind_dir.innerHTML = response.current.wind_dir
     humidity.innerHTML = response.current.humidity
	 humidity_block.innerHTML = response.current.humidity
	 visibility.innerHTML = response.current.vis_km
	 precip_mm.innerHTML = response.current.precip_mm
     //sunset.innerHTML = response.sunset
	})

	.catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getweather(city_input.value)
})

getweather("India")
