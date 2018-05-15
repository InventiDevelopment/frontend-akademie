export const INCREMENT = 'INCREMENT';

export const increment = (transaction) => {
  return {
    type: INCREMENT,
    data: transaction
  }
}