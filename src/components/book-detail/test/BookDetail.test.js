import { render, screen } from '@testing-library/react';

import { BookDetail } from "../BookDetail";

describe('BookDetail', () => {
  it('renders a title', () => {
    const props = {
      book: {
        title: 'Refactoring',
        description: "Martin Fowler's Refactoring defined core ideas and techniques" + 
        "that hundreds of thousands of developers have used to improve" + 
        "their software."
      }
    }
    render(<BookDetail {...props} />)
    const title = screen.getByText(props.book.title)
    const description = screen.getByText(props.book.description)
    expect(title.textContent).toEqual(props.book.title)
    expect(description.textContent).toEqual(props.book.description)
  })

  it('Displays the book name when description was not given', () => {
    const props = {
      book: {
        title: 'Refactoring'
      }
    }
    render(<BookDetail {...props} />)
    const title = screen.getByTestId('book-title');
    const description = screen.getByTestId("book-description")
    expect(title.textContent).toEqual(props.book.title)
    expect(description.textContent).toEqual(props.book.title)
  })
});