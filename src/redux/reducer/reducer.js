import * as types from '../../types'

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_BOOKS_PENDING:
      return { ...state, loading: true };
    case types.FETCH_BOOKS_SUCCESS:
      return { books: action.books };
    case types.FETCH_BOOKS_FAILED:
      return { error: action.error };
    default:
      return state;
  }
}

export default reducer;
