/** @jsx jsx */

import React from 'react'
import {connect} from 'react-redux'
import {jsx} from '@emotion/core'

import {fetchWeather} from '../actions'

const WeatherTable = ({dispatch, loading, error, city, list}) => {
  React.useEffect(() => {
    dispatch(fetchWeather())
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
  city: state.weather.city,
  list: state.weather.list,
  loading: state.weather.loading,
  error: state.weather.error,
})

const mapDispatchToProps = (dispatch) => ({
  // toggleTodo: (id) => dispatch(toggleTodo(id)),
})

export default connect(mapStateToProps)(WeatherTable)
