/** @jsx jsx */

import React from 'react'
import {connect} from 'react-redux'
import {jsx} from '@emotion/core'

import {fetchWeatherData} from '../actions'
import weatherReducer from '../reducers/weatherReducer'

const WeatherTable = ({dispatch, loading, error, city, list}) => {
  React.useEffect(() => {
    dispatch(fetchWeatherData())
  }, [])

  console.log(loading, error, city, list)

  if (loading) {
    return <div>Loading weather data...</div>
  }

  if (error) {
    return <div>ERROR!</div>
  }

  return (
    <div>
      <div>
        <div>City: {city.name}</div>
        <div>Country: {city.country}</div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  city: state.weather.items,
  list: state.weather.items,
  loading: state.weather.loading,
  error: state.weather.error,
})

const mapDispatchToProps = (dispatch) => ({
  // toggleTodo: (id) => dispatch(toggleTodo(id)),
})

export default connect(mapStateToProps)(WeatherTable)
