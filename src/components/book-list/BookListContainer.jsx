import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/actions";
//import { useRemoteService } from "../../custom-hooks/useRemoteService";
import SearchBox from "../SearchBox/SearchBox";
import { BookList } from "./BookList";
import { useEffect, useState } from "react";
import bookListSelector from "../../redux/selectors/selector";

export const BookListContainer = () => {
  const dispatch = useDispatch();

  const [term, setTerm] = useState("");

  useEffect(() => {
    dispatch(actions.fetchBooks(term));
  }, [term, dispatch]);

  const onSearch = (event) => {
    dispatch(actions.setSearchTerm(event.target.value));
    dispatch(actions.fetchBooks());
  }

  const { books: data, loading, error } = useSelector(bookListSelector);

  return (
    <>
      <SearchBox onSearch={onSearch} term={term} />
      <BookList books={data} loading={loading} error={error} />
    </>
  );
};
