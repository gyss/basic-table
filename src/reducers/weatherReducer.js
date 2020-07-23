import {FETCH_WEATHER_BEGIN, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE, SELECT_WEATHER_ITEM} from '../actions'

const initialState = {
  city: {},
  list: [],
  loading: false,
  error: null,
  selected: null,
}

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        city: action.payload.city,
        list: action.payload.list,
      }

    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        city: {},
        list: [],
      }

    case SELECT_WEATHER_ITEM:
      return {
        ...state,
        selected: action.payload,
      }

    default:
      return state
  }
}
