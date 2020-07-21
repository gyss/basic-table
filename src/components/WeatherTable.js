/** @jsx jsx */

import React from 'react'

import {jsx} from '@emotion/core'

export default function WeatherTable() {
  React.useEffect(() => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=416f21735638892910fc788dbd92dc24')
      .then((data) => data.json())
      .then(
        (data) => {
          console.log(data)
        },
        (e) => {
          console.error(e)
        },
      )
  }, [])

  return <div>Hello world</div>
}
