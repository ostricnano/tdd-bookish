import React from 'react';
import { render, screen } from '@testing-library/react';
import { BookList } from '../BookList';

describe('BookList', () => {
  it('loading', () => {
    const props = {
      loading: true,
    };
    render(<BookList {...props} />);
    const content = screen.getByText('Loading...');
    expect(content.innerHTML).toBe('Loading...');
  });
  
  it('error', () => {
    const props = {
      error: true,
    };
    render(<BookList {...props} />);
    const content = screen.getByText('Error');
    expect(content.innerHTML).toBe('Error');
  });

  it('books', () => {
    const props = {
      books: [
        { id: 1, name: 'Refactoring' },
        { id: 2, name: 'Domain driven design' },
      ],
    };
    render(<BookList {...props} />);
  
    // Use screen.getAllByRole to query all h2 elements, assuming h2 elements are used for titles.
    const titles = screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent);
  
    expect(titles).toEqual(['Refactoring', 'Domain driven design']);
  });
});