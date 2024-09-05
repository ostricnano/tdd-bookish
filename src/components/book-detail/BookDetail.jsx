import React from 'react'

const getDescriptionFor = (book) => {
  return book.description ? book.description : book.title
}

export const BookDetail = ({ book }) => {
  return (
    <div className='detail'>
      <h2 data-testid="book-title" className='book-title'>{book.title}</h2>
      <p data-testid="book-description" className='book-description'>
        {getDescriptionFor(book)}
      </p>
    </div>
  )
}
