import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // Call ajax request to get url using axios
  const request = axios.get(url);     // promise doesn't actually contain any data (asynchronous)

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
