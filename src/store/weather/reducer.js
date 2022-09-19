import { GET_CITY_WEATHER, GET_CITY_WEATHER_FAILURE, GET_CITY_WEATHER_INIT, GET_CITY_WEATHER_SUCCESS } from './actionTypes';

const initialState = {
    cityData: null,
    getCityDataSuccess: false,
    getCityDataFailure: false,
    isLoading: false,
    errorMessage: ''
}

const Weather = (state = initialState, action) => {
    switch (action.type) {
        case GET_CITY_WEATHER:
            return {
                ...state,
                getCityDataSuccess: false,
                getCityDataFailure: false,
                isLoading: true
            }
        case GET_CITY_WEATHER_SUCCESS:
            return {
                ...state,
                getCityDataSuccess: true,
                getCityDataFailure: false,
                cityData: action.payload
            }
        case GET_CITY_WEATHER_FAILURE:
            return {
                ...state,
                getCityDataSuccess: false,
                getCityDataFailure: true,
                errorMessage: action.payload
            }
        case GET_CITY_WEATHER_INIT:
            return {
                ...state,
                getCityDataSuccess: false,
                getCityDataFailure: false,
                isLoading: false
            }
        default:
            return state
    }
}

export default Weather
