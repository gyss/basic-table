export default function weatherReducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD_WEATHER_DATA':
      return {
        city: {...action.payload.city},
        list: [...action.payload.list],
      }
    case 'LOAD_WEATHER_ERROR':
      return {
        error: action.payload.error,
      }
    default:
      return state
  }
}
