import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from '../weather'
import weatherFixture from '../../fixtures/weatherFixture'
import {initialState} from '../../reducers/weather'

const mockStore = configureMockStore([thunk])

describe('weather actions', () => {
  it('should create an action to begin fetch', () => {
    expect(actions.fetchWeatherBegin()).toEqual({
      type: actions.FETCH_WEATHER_BEGIN,
    })
  })

  it('should create an action to begin fetch', () => {
    expect(
      actions.fetchWeatherSuccess({
        data: [1, 2, 3],
      }),
    ).toEqual({
      type: actions.FETCH_WEATHER_SUCCESS,
      payload: {
        data: [1, 2, 3],
      },
    })
  })

  it('should create an action to begin fetch', () => {
    expect(actions.fetchWeatherFailure('Error message')).toEqual({
      type: actions.FETCH_WEATHER_FAILURE,
      payload: 'Error message',
    })
  })

  it('should create an action to begin fetch', () => {
    expect(actions.selectWeatherItem({id: '123456'})).toEqual({
      type: actions.SELECT_WEATHER_ITEM,
      payload: {id: '123456'},
    })
  })
})

describe('weather async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('should fetch weather forecast', () => {
    fetchMock.getOnce(
      `http://api.openweathermap.org/data/2.5/forecast?id=${actions.OPEN_WEATHER_ID}&appid=${actions.OPEN_WEATHER_APP_ID}`,
      {
        body: weatherFixture,
        headers: {'content-type': 'application/json'},
      },
    )

    const expectedActions = [
      {type: actions.FETCH_WEATHER_BEGIN},
      {type: actions.FETCH_WEATHER_SUCCESS, payload: weatherFixture},
    ]
    const store = mockStore(initialState)
    return store.dispatch(actions.fetchWeather()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should return error when fetching weather forecast', () => {
    fetchMock.getOnce(
      `http://api.openweathermap.org/data/2.5/forecast?id=${actions.OPEN_WEATHER_ID}&appid=${actions.OPEN_WEATHER_APP_ID}`,
      {
        body: {
          cod: '401',
          message: 'Not authenticated',
        },
        headers: {'content-type': 'application/json'},
      },
    )

    const expectedActions = [
      {type: actions.FETCH_WEATHER_BEGIN},
      {
        type: actions.FETCH_WEATHER_FAILURE,
        payload: 'Not authenticated',
      },
    ]
    const store = mockStore(initialState)
    return store.dispatch(actions.fetchWeather()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
