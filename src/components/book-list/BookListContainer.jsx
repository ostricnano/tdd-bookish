import { useRemoteService } from "../../custom-hooks/useRemoteService";
import SearchBox from "../SearchBox/SearchBox";
import { BookList } from "./BookList";
import { useEffect, useState } from "react";

export const BookListContainer = () => {
  const { data, loading, error, setUrl } = useRemoteService(
    "http://localhost:8080/books"
  );
  const [term, setSearchTerm] = useState("");

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`);
  }, [term, setUrl]);

  const onSearch = (event) => setSearchTerm(event.target.value);

  return (
    <>
      <SearchBox onSearch={onSearch} term={term} />
      <BookList books={data} loading={loading} error={error} />
    </>
  );
};
