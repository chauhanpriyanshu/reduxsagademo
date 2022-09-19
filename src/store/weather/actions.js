import { GET_CITY_WEATHER, GET_CITY_WEATHER_FAILURE, GET_CITY_WEATHER_INIT, GET_CITY_WEATHER_SUCCESS } from './actionTypes';

// Actions to get weather of a single city
export const getCityWeather = (data) => {
    return{
        type: GET_CITY_WEATHER,
        payload: data
    }
}
export const getCityWeatherSuccess = (data) => {
    return{
        type: GET_CITY_WEATHER_SUCCESS,
        payload: data
    }
}

export const getCityWeatherFailure = (data) => {
    return{
        type: GET_CITY_WEATHER_FAILURE,
        payload: data
    }
}

export const getCityWeatherInit = (data) => {
    return{
        type: GET_CITY_WEATHER_INIT,
        payload: data
    }
}
