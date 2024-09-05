import { Route, Routes } from "react-router-dom";
import { Typography } from "@mui/material";
import { BookListContainer } from "./components/book-list/BookListContainer";
import { BookDetailsContainer } from "./components/book-detail/BookDetailsContainer";

const App = () => {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookListContainer />
      <Routes>
        <Route path="/books" element={<BookListContainer />} />
        <Route path="/books/:id" element={<BookDetailsContainer />} />
      </Routes>
    </div>
  );
};

export default App;
