import { fetchBooks, setSearchTerm } from "../actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as types from "../../../types";
import axios from "axios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Books list container related actions", () => {
  // Clear mocks after each test to prevent state leakage
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Sets the search keyword", () => {
    const term = "";
    const expectedAction = {
      type: types.SET_SEARCH_TERM,
      term,
    };
    
    const action = setSearchTerm(term);
    expect(action).toEqual(expectedAction);
  });

  it("Fetches data successfully", () => {
    const books = [
      { id: 1, name: "Refactoring" },
      { id: 2, name: "Domain-driven design" },
      { id: 3, name: "Building Microservices" },
    ];

    // Mock axios.get to resolve with the books data
    axios.get = jest.fn().mockResolvedValue({ data: books });

    const expectedActions = [
      { type: types.FETCH_BOOKS_PENDING },
      { type: types.FETCH_BOOKS_SUCCESS, books },
    ];

    const store = mockStore({ books: [] });

    // Dispatch fetchBooks and check if the correct actions were dispatched
    return store.dispatch(fetchBooks("")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("Fetches data with an error", () => {
    const errorMessage = "Something went wrong";

    // Mock axios.get to reject with an error message
    axios.get = jest.fn().mockRejectedValue({ message: errorMessage });

    const expectedActions = [
      { type: types.FETCH_BOOKS_PENDING },
      { type: types.FETCH_BOOKS_FAILED, error: errorMessage }, // Ensure this matches your action creator
    ];

    const store = mockStore({ books: [] });

    // Dispatch fetchBooks and check if the error actions were dispatched
    return store.dispatch(fetchBooks("")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("Fetches data with a search term", () => {
    const books = [
      { id: 1, name: "Refactoring" },
      { id: 2, name: "Domain-driven design" },
      { id: 3, name: "Building Microservices" },
    ];

    // Mock axios.get to resolve with the books data when searching with a term
    axios.get = jest.fn().mockResolvedValue({ data: books });

    const store = mockStore({ books: [] });

    // Dispatch fetchBooks with the term "domain" and check if the correct URL was called
    return store.dispatch(fetchBooks("domain")).then(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "http://localhost:8080/books?q=domain"
      );
    });
  });
});
