/** @format */

import * as React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import WeatherItemTable from '../WeatherItemTable'
import weatherFixture from '../../../fixtures/weatherFixture'

describe('<WeatherItemTable>', () => {
  let props

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
    }
  })

  test('should render', () => {
    const {asFragment} = render(<WeatherItemTable item={weatherFixture.list[0]} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
