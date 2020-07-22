/** @jsx jsx */

import React from 'react'
import {connect} from 'react-redux'
import {css, jsx} from '@emotion/core'

// import {SortableContainer, SortableElement} from 'react-sortable-hoc'
import {defaultTableRowRenderer, AutoSizer, Table, Column} from 'react-virtualized'

import {fetchWeather} from '../actions'

const container = css`
  height: 100%;
`

const headerStyles = css`
  padding: 2em;
  background-color: #fafbfc;
  margin-bottom: 2em;
  box-shadow: inset 0 -1px 0 #e1e4e8;
`

/*
const SortableTable = SortableContainer(Table)
const SortableTableRowRenderer = SortableElement(defaultTableRowRenderer)

function rowRenderer(props) {
  return <SortableTableRowRenderer {...props} />
}

function CustomizedTable(props) {
  return <SortableTable rowRenderer={rowRenderer} {...props} />
}
*/

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

  list.forEach((element) => {
    //if (element.rain) {
    //console.log('>>>', element.weather.length)
    //}
  })

  return (
    <div css={container}>
      <div css={headerStyles}>
        <h2>
          {city.name}, {city.country}
        </h2>
      </div>

      <AutoSizer>
        {({height, width}) => (
          <Table
            width={width}
            height={height}
            headerHeight={40}
            rowHeight={30}
            rowCount={list.length}
            rowGetter={({index}) => list[index]}>
            <Column label="Date" dataKey="dt_txt" width={350} />
            <Column width={300} label="Visibility" dataKey="visibility" />
            <Column
              width={300}
              label="Wind"
              dataKey="wind"
              cellDataGetter={({rowData}) => rowData.wind.speed + ' / ' + rowData.wind.deg}
            />
            <Column width={300} label="Clouds" dataKey="clouds" cellDataGetter={({rowData}) => rowData.clouds.all} />
            <Column
              width={300}
              label="Rain"
              dataKey="rain"
              cellDataGetter={({rowData}) => rowData.rain && rowData.rain['3h']}
            />
            <Column
              width={300}
              label="Feels like"
              dataKey="feels_like"
              cellDataGetter={({rowData}) => rowData.main.feels_like}
            />
            <Column
              width={300}
              label="Grnd Level"
              dataKey="grnd_level"
              cellDataGetter={({rowData}) => rowData.main.grnd_level}
            />
            <Column
              width={300}
              label="Humidity"
              dataKey="humidity"
              cellDataGetter={({rowData}) => rowData.main.humidity}
            />
            <Column
              width={300}
              label="Pressure"
              dataKey="pressure"
              cellDataGetter={({rowData}) => rowData.main.pressure}
            />
            <Column
              width={300}
              label="Sea Level"
              dataKey="sea_level"
              cellDataGetter={({rowData}) => rowData.main.sea_level}
            />
            <Column width={300} label="Temp" dataKey="temp" cellDataGetter={({rowData}) => rowData.main.temp} />
            <Column
              width={300}
              label="Temp min"
              dataKey="temp_min"
              cellDataGetter={({rowData}) => rowData.main.temp_min}
            />
            <Column
              width={300}
              label="Temp max"
              dataKey="temp_max"
              cellDataGetter={({rowData}) => rowData.main.temp_max}
            />
          </Table>
        )}
      </AutoSizer>

      {/*<List className="List" height={300} itemCount={list.length} itemSize={35}>
        {({index, style}) => {
          const item = list[index]
          return (
            <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
              {item.main.temp}
            </div>
          )
        }}
      </List>*/}
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
