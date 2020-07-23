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

const WeatherItemTable = ({onReturn, weatherItem}) => {
  return (
    <>
      <div>item</div>
      <button onClick={onReturn}>Return</button>
    </>
  )
}

export default WeatherItemTable
