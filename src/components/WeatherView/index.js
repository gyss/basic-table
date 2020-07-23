/** @jsx jsx */

import React from 'react'
import {connect} from 'react-redux'
import {css, jsx} from '@emotion/core'

import {fetchWeather, selectWeatherItem} from '../../actions'
import WeatherTable from './WeatherTable'
import WeatherItemTable from './WeatherItemTable'

const container = css`
  height: 80%;
  width: 100%;
`

const header = css`
  padding: calc(2em + 10px);
  background-color: #fafbfc;
  box-shadow: inset 0 -1px 0 #e1e4e8;
`

const table = css`
  overflow: auto;
  height: 100%;
  padding: 2em;
`

const loadingStyles = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const WeatherView = ({dispatch, weather}) => {
  const {loading, city, selected, error} = weather

  React.useEffect(() => {
    dispatch(fetchWeather())
  }, [])

  if (loading) {
    return <div css={loadingStyles}>Loading weather data...</div>
  }

  if (error) {
    return <div>ERROR!</div>
  }

  function handleSelectItem(event) {
    dispatch(selectWeatherItem(event.rowData))
  }

  function clearSelectedItem() {
    dispatch(selectWeatherItem(null))
  }

  return (
    <div css={container}>
      <div css={header}>
        <h2>
          {city.name}, {city.country}
        </h2>
      </div>
      <div css={table}>
        {selected ? (
          <WeatherItemTable onReturn={clearSelectedItem} weatherItem={selected} />
        ) : (
          <WeatherTable onSelect={handleSelectItem} weather={weather} />
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  weather: state.weather,
})

export default connect(mapStateToProps)(WeatherView)
