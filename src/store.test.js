import axios from 'axios';
import * as actions from './redux/actions/actions';
import store from './store';

describe('Store', () => {
  const books = [
    { id: 1, name: 'Refactoring' },
  ]
  it('Fetch books from remote', () => {
    axios.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: books }));
      return store.dispatch(actions.fetchBooks()).then(() => {
        const state = store.getState();
        expect(state.books).toEqual(1);
        expect(state.books).toEqual(books);

      }
    );
  });
});