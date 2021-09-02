interface Coord{
	lon: number,
	lat: number
}

interface Main {
	feels_like: number,
	humidity: number,
	pressure: number,
	temp: number,
	temp_max: number,
	temp_min: number
}

interface Clouds {
	all: number
}

interface Sys {
	country: string,
	id: number,
	sunrise: number,
	sunset: number,
	type: number
}

interface  Weather {
	description: string,
	icon: string,
	id: number,
	main: string
}	

interface Wind {
	speed: number,
	deg: number,
	gust: number
}

interface Rain {
	"3h": number
}

export interface WeatherData {
	base: string,
	clouds : Clouds,
	cod : number,
	coord: Coord,
	dt: number,
	id: number,
	main: Main,
	name: string,
	sys: Sys,
	timezone: number,
	visibility: number,
	weather: Weather[],
	wind: Wind
}

export interface WeatherDataForcast {
	clouds : Clouds,
	dt: number,
	main: Main,
	sys: Sys,
	visibility: number,
	weather: Weather[],
	wind: Wind,
	pop: number,
	rain: number,
	dt_txt: string
}

export interface WeatherForcastResponse {
	cod: string,
   	message: number,
    cnt: number,
	list: WeatherDataForcast[],
	city: Array<any>
}