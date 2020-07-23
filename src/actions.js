import weatherFixture from './fixtures/weatherFixture'

export const FETCH_WEATHER_BEGIN = 'FETCH_WEATHER_BEGIN'
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE'
export const SELECT_WEATHER_ITEM = 'SELECT_WEATHER_ITEM'

const OPEN_WEATHER_ID = '2643743'
const OPEN_WEATHER_APP_ID = '416f21735638892910fc788dbd92dc24'

export const fetchWeatherBegin = () => ({
  type: FETCH_WEATHER_BEGIN,
})

export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
})

export const fetchWeatherFailure = (errorMessage) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: errorMessage,
})

export const selectWeatherItem = (item) => ({
  type: SELECT_WEATHER_ITEM,
  payload: item,
})

export const fetchWeather = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchWeatherBegin())
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?id=${OPEN_WEATHER_ID}&appid=${OPEN_WEATHER_APP_ID}`,
      )
      const data = await response.json()
      if (data.cod && data.cod !== '200') {
        return dispatch(fetchWeatherFailure(data.message))
      }
      dispatch(fetchWeatherSuccess(data))
      //dispatch(fetchWeatherSuccess(weatherFixture))
    } catch (err) {
      console.error(err)
      dispatch(fetchWeatherFailure('Error fetching weather data. Please try again later'))
    }
  }
}
