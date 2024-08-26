import React, { useState, useEffect } from "react";
import axios from "axios";

export const BookDetailsContainer = ({ match }) => {
  const [id, _] = useState(match.params.id);
  const [book, setBook] = useState({});
  useEffect(() => {
    const fetchBook = async () => {
      const book = await axios.get(`http://localhost:8080/books/${id}`);
      setBook(book.data);
    };
    fetchBook();
  }, [id]);
  return (
    <h2>{book.name}</h2>
  );
};
