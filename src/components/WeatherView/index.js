/** @jsx jsx */

import React from 'react'
import {connect} from 'react-redux'
import {css, jsx} from '@emotion/core'
import styled from '@emotion/styled'

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

const subheader = css`
  padding: 1em 2em;
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
  span {
    display: inline-block;
    max-width: 500px;
  }
`

const errorStyles = css`
  ${loadingStyles}
  color: red;
`

const Button = styled.a`
  display: inline-block;
  text-align: center;

  min-width: 70px;
  padding: 0.5em 1.125em;
  margin-left: 2em;

  background-color: #0087ff;
  border-color: #0060ff;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:active {
    background-color: #0060ff;
  }
`

const WeatherView = ({dispatch, weather}) => {
  const {loading, city, selected, error} = weather

  React.useEffect(() => {
    dispatch(fetchWeather())
  }, [])

  if (loading) {
    return (
      <div css={loadingStyles}>
        <span>Loading weather data...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div css={errorStyles}>
        <span>{error}</span>
      </div>
    )
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
      {selected && (
        <div css={subheader}>
          {selected.dt_txt} <Button onClick={clearSelectedItem}>Return</Button>
        </div>
      )}
      <div css={table}>
        {selected ? (
          <WeatherItemTable item={selected} />
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
