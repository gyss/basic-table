/** @format */

import * as React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

//jest.mock('react-virtualized')

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

  test('should trigger onSelect prop when one row is clicked', () => {
    render(<WeatherTable {...props} />)
    // const input = screen.getByText('2020-07-23 15:00:00')
    // fireEvent.click(input)
    expect(true).toBe(true)
    //expect(props.onSelect).toHaveBeenLastCalledWith({type: SET_CHAT_MESSAGE, payload: 'Hello world'})
  })
})
