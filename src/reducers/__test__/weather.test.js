import reducer from '../weather'
import {
  FETCH_WEATHER_BEGIN,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  SELECT_WEATHER_ITEM,
} from '../../actions/weather'

describe('weather reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      city: {},
      list: [],
      loading: false,
      error: null,
      selected: null,
    })
  })

  it('should handle fetch begin', () => {
    expect(
      reducer(
        {
          city: {},
          list: [],
          loading: false,
          error: null,
          selected: null,
        },
        {
          type: FETCH_WEATHER_BEGIN,
        },
      ),
    ).toEqual({
      city: {},
      list: [],
      loading: true,
      error: null,
      selected: null,
    })
  })

  it('should handle fetch success', () => {
    expect(
      reducer(
        {
          city: {},
          list: [],
          loading: true,
          error: null,
          selected: null,
        },
        {
          type: FETCH_WEATHER_SUCCESS,
          payload: {city: 'London', list: [1, 2, 3]},
        },
      ),
    ).toEqual({
      city: 'London',
      list: [1, 2, 3],
      loading: false,
      error: null,
      selected: null,
    })
  })

  it('should handle fetch error', () => {
    expect(
      reducer(
        {
          city: {},
          list: [],
          loading: true,
          error: null,
          selected: null,
        },
        {
          type: FETCH_WEATHER_FAILURE,
          payload: 'Error message',
        },
      ),
    ).toEqual({
      city: {},
      list: [],
      loading: false,
      error: 'Error message',
      selected: null,
    })
  })

  it('should mark item selected', () => {
    expect(
      reducer(
        {
          city: {},
          list: [],
          loading: false,
          error: null,
          selected: null,
        },
        {
          type: SELECT_WEATHER_ITEM,
          payload: {id: '123456'},
        },
      ),
    ).toEqual({
      city: {},
      list: [],
      loading: false,
      error: null,
      selected: {id: '123456'},
    })
  })
})
