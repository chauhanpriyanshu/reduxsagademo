import * as WeatherActions from './store/weather/actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './app.scss'
import Weather from './components/weather';
import Loader from './components/loader';

function App() {
  const [city, setcity] = useState("")
  const [data, setdata] = useState(null)
  const dispatch = useDispatch();
  const state = useSelector(state=>{
    return {weather : state.Weather}
  })

  function changeCity(val){
    setcity(val)
    if(val==""){
      setdata(null)
    }
  }

  function getWeather(){
    if(city!=""){
      dispatch(WeatherActions.getCityWeather({
          "city": city
      }))
    }
  }

  useEffect(() => {
    if(state.weather.getCityDataSuccess===true){
      setdata(state.weather.cityData)
      dispatch(WeatherActions.getCityWeatherInit())
    }
    if(state.weather.getCityDataFailure===true){
      dispatch(WeatherActions.getCityWeatherInit())
    }
  }, [state.weather])
  

  return (
    <div className='main'>
      <div className='weather-cta'>
        <h2 className='app-heading'>Weather App</h2>
        <div className='app-user-cta'>
          <input className='app-txt-box' type="text" value={city} onKeyDown={(e)=>{if(e.code=="Enter")getWeather()}} onChange={(e)=>{changeCity(e.target.value)}} />
          <button className='app-action-btn' disabled={(city=="")?true:false} onClick={getWeather}>Submit</button>
        </div>
      </div>

      {
        !state.weather.isLoading?
        <Weather data={data} />
        :
        <Loader/>
      }
    </div>
  );
}


export default App;