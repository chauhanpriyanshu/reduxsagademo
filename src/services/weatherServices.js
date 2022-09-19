import API from './client';

export function getCityWeatherData(payload) {
    let params = {"q": payload.city, "APPID": '3e4fc0c79896fe05c7fd9258c07f1819', "units": "metric"};
    return API({
      method: 'GET',
      url: `/data/2.5/weather`,
      params: params
    })
  }
  