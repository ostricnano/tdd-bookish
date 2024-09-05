import { useRemoteService } from "../../custom-hooks/useRemoteService";
import {BookDetail} from "./BookDetail";
import { useParams } from "react-router";

export const BookDetailsContainer = ({ match }) => {
  const { id } = useParams();
  const { data } = useRemoteService(`http://localhost:8080/books/${id}`, {});
  return (
    <BookDetail book={data} />
  );
};
