/** @jsx jsx */

import React from 'react'
import {css, jsx} from '@emotion/core'
import {AutoSizer, Table, Column} from 'react-virtualized'

function rowClassName({index}) {
  if (index < 0) {
    return 'headerRow'
  } else {
    return index % 2 === 0 ? 'evenRow' : 'oddRow'
  }
}

const WeatherTable = ({onSelect, weather}) => {
  return (
    <AutoSizer>
      {({height, width}) => (
        <Table
          width={Math.max(1570, width)}
          height={height}
          headerHeight={40}
          rowHeight={30}
          rowCount={weather.list.length}
          rowGetter={({index}) => weather.list[index]}
          rowClassName={rowClassName}
          onRowClick={onSelect}>
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
  )
}

export default WeatherTable
