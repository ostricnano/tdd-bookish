import React from "react";
import { render, screen } from "@testing-library/react";
import { BookList } from "../BookList";
import { MemoryRouter as Router } from "react-router-dom";

const renderWithRouter = (component) => {
  return {
    ...render(<Router>{component}</Router>),
  };
};

describe("BookList", () => {
  it("loading", () => {
    const props = {
      loading: true,
    };
    render(<BookList {...props} />);
    const content = screen.getByText("Loading...");
    expect(content.innerHTML).toBe("Loading...");
  });

  it("error", () => {
    const props = {
      error: true,
    };
    render(<BookList {...props} />);
    const content = screen.getByText("Error");
    expect(content.innerHTML).toBe("Error");
  });

  it("books", () => {
    const props = {
      books: [
        { id: 1, title: "Refactoring" },
        { id: 2, title: "Domain driven design" },
        { id: 3, title: "Building Microservices" },
        { id: 4, title: "Acceptance Test Driven Development" },
      ],
    };
    renderWithRouter(<BookList {...props} />);

    // Use screen.getAllByRole to query all h2 elements, assuming h2 elements are used for titles.
    const titles = screen
      .getAllByRole("heading", { level: 2 })
      .map((heading) => heading.textContent);

    expect(titles).toEqual([
      "Refactoring",
      "Domain driven design",
      "Building Microservices",
      "Acceptance Test Driven Development",
    ]);
  });
});
