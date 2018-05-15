export const INCREMENT = 'INCREMENT';
export const SELECT_MONTH = 'SELECT_MONTH';

export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const selectMonth = (value) => {
  return {
    type: SELECT_MONTH,
    data: value
  }
}