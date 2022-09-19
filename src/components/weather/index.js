import React from 'react'
import './style.scss'

function Weather(props) {
  const { data } = props;
  return (
    <div className='weather-contaier'>
        {
            data!=null
            &&
            <>
                <h2 className='weather-info-main'>You are currently viewing the weather of {data.name}</h2>
                <h2 className='weather-info-sub'>The temperature is {data.main.temp}, and feels like {data.main.feels_like}</h2>
            </>
        }
    </div>
  )
}

export default Weather