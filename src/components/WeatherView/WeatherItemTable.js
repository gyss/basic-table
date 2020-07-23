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

const WeatherItemTable = ({item}) => {
  return (
    <>
      <AutoSizer>
        {({height, width}) => (
          <Table
            width={Math.max(550, width)}
            height={height}
            headerHeight={40}
            rowHeight={30}
            rowCount={item.weather.length}
            rowGetter={({index}) => item.weather[index]}
            rowClassName={rowClassName}>
            <Column label="Main" dataKey="main" width={150} />
            <Column width={200} label="Description" dataKey="description" flexGrow={1} />
            <Column width={200} label="Icon" dataKey="icon" />
          </Table>
        )}
      </AutoSizer>
    </>
  )
}

export default WeatherItemTable
