const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY = "69b8cb236c26ada1334dbd3f1523c14f";

const getData = ( infoType, searchParams ) => {
    const url = new URL (BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url)
        .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, weather, speed}
}

const getFormattedWeatherData = async(searchParams) => {
    const currentWeather = await getData('weather', searchParams).then(formatCurrentWeather)

    return currentWeather
}

export default getFormattedWeatherData