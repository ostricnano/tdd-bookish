import reducer from "../reducer";
import * as types from '../../../types'

describe("reducer", () => {
  it("Show loading when request is sent", () => {
    const initState = { loading: false };
    const action = { type: types.FETCH_BOOKS_PENDING };
    const state = reducer(initState, action);
    expect(state.loading).toBeTruthy();
  });
  
  it('Add books to state when request succefully', () => {
    const books = [
      { id: 1, name: 'Refactoring' },
      { id: 2, name: 'Domain-driven design' },
      { id: 3, name: 'Building Microservices' },
    ]
    const action = {  
      type: types.FETCH_BOOKS_SUCCESS, 
      books 
    };
    const state = reducer([], action);
    expect(state.books).toEqual(books);
  });
});
