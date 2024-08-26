import { Route, Routes } from "react-router-dom";
import { Typography } from "@mui/material";
import { BookListContainer } from "./components/BookListContainer";
import { BookDetailsContainer } from "./components/BookDetailsContainer";

const App = () => {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookListContainer />
      <Routes>
        <Route path="/books" component={BookListContainer} />
        <Route path="/books/:id" component={BookDetailsContainer} />
      </Routes>
    </div>
  );
};

export default App;
