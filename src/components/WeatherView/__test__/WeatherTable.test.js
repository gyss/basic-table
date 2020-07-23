/** @format */

import * as React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import WeatherTable from '../WeatherTable'
import weatherFixture from '../../../fixtures/weatherFixture'

describe('<WeatherTable>', () => {
  let props

  beforeEach(() => {
    props = {
      onSelect: jest.fn(),
      weather: weatherFixture,
    }
  })

  test('should render', () => {
    const {asFragment} = render(<WeatherTable {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
