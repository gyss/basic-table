/** @jsx jsx */

import React from 'react'
import {connect} from 'react-redux'
import {css, jsx} from '@emotion/core'

import {AutoSizer, Table, Column} from 'react-virtualized'

import {fetchWeather, selectWeatherItem} from '../actions'

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

function rowClassName({index}) {
  if (index < 0) {
    return 'headerRow'
  } else {
    return index % 2 === 0 ? 'evenRow' : 'oddRow'
  }
}

const WeatherTable = ({dispatch, loading, error, city, list, selected}) => {
  React.useEffect(() => {
    dispatch(fetchWeather())
  }, [])

  if (loading) {
    return <div>Loading weather data...</div>
  }

  if (error) {
    return <div>ERROR!</div>
  }

  function handleRowClick(event) {
    dispatch(selectWeatherItem(event.rowData))
  }

  return (
    <div css={container}>
      <div css={header}>
        <h2>
          {city.name}, {city.country}
        </h2>
      </div>
      <div css={table}>
        <AutoSizer>
          {({height, width}) => (
            <Table
              width={Math.max(1570, width)}
              height={height}
              headerHeight={40}
              rowHeight={30}
              rowCount={list.length}
              rowGetter={({index}) => list[index]}
              rowClassName={rowClassName}
              onRowClick={handleRowClick}>
              <Column label="Date" dataKey="dt_txt" width={200} flexGrow={1} />
              <Column width={110} label="Visibility" dataKey="visibility" flexGrow={1} />
              <Column
                width={100}
                label="Wind"
                dataKey="wind"
                cellDataGetter={({rowData}) => rowData.wind.speed + ' / ' + rowData.wind.deg}
                flexGrow={1}
              />
              <Column
                width={100}
                label="Clouds"
                dataKey="clouds"
                cellDataGetter={({rowData}) => rowData.clouds.all}
                flexGrow={1}
              />
              <Column
                width={100}
                label="Rain"
                dataKey="rain"
                cellDataGetter={({rowData}) => rowData.rain && rowData.rain['3h']}
                flexGrow={1}
              />
              <Column
                width={120}
                label="Feels like"
                dataKey="feels_like"
                cellDataGetter={({rowData}) => rowData.main.feels_like}
                flexGrow={1}
              />
              <Column
                width={140}
                label="Grnd Level"
                dataKey="grnd_level"
                cellDataGetter={({rowData}) => rowData.main.grnd_level}
                flexGrow={1}
              />
              <Column
                width={120}
                label="Humidity"
                dataKey="humidity"
                cellDataGetter={({rowData}) => rowData.main.humidity}
                flexGrow={1}
              />
              <Column
                width={120}
                label="Pressure"
                dataKey="pressure"
                cellDataGetter={({rowData}) => rowData.main.pressure}
                flexGrow={1}
              />
              <Column
                width={120}
                label="Sea Level"
                dataKey="sea_level"
                cellDataGetter={({rowData}) => rowData.main.sea_level}
                flexGrow={1}
              />
              <Column
                width={120}
                label="Temp"
                dataKey="temp"
                cellDataGetter={({rowData}) => rowData.main.temp}
                flexGrow={1}
              />
              <Column
                width={120}
                label="Temp min"
                dataKey="temp_min"
                cellDataGetter={({rowData}) => rowData.main.temp_min}
                flexGrow={1}
              />
              <Column
                width={120}
                label="Temp max"
                dataKey="temp_max"
                cellDataGetter={({rowData}) => rowData.main.temp_max}
                flexGrow={1}
              />
            </Table>
          )}
        </AutoSizer>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  city: state.weather.city,
  list: state.weather.list,
  loading: state.weather.loading,
  error: state.weather.error,
  selected: state.weather.selected,
})

export default connect(mapStateToProps)(WeatherTable)
