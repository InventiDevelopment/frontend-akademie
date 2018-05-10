
export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        ...action.data
      }

    default:
      return state;
  }
}
