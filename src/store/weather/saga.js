import { GET_CITY_WEATHER, GET_CITY_WEATHER_FAILURE, GET_CITY_WEATHER_INIT, GET_CITY_WEATHER_SUCCESS } from './actionTypes';
import { takeEvery,  fork,  put,  all,  call,  takeLatest } from 'redux-saga/effects'
import { getCityWeatherData } from './../../services/weatherServices';
import { getCityWeatherFailure, getCityWeatherSuccess } from './actions';

function* fetchCityData(action){
    try{
        const response = yield call (
            getCityWeatherData,
            action.payload
        )
        if(response.status === 200){
            yield put(getCityWeatherSuccess(response.data))
        }
        else{
            yield put(getCityWeatherFailure(response.data.message))
            console.log(response)
        }
    }
    catch(error){
        yield put(getCityWeatherFailure(error))
        console.error(error);
    }
}


export function* watchGetCityData(){
    yield takeEvery(GET_CITY_WEATHER, fetchCityData)
}

function* WeatherSaga(){
    yield all([
        fork(watchGetCityData)
    ])
}

export default WeatherSaga
