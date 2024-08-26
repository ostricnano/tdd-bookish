/* eslint-disable no-undef */
import axios from 'axios'

describe('Bookish application', () => {
  before(() =>{
    return axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch((err) => err)
  })

  afterEach(()=>{
    return axios
      .delete('http://localhost:8080/books?_cleanup=true')
    .catch((err) => err)
  })

  beforeEach(()=>{
    const books = [
      { id: 1, name: 'Refactoring' },
      { id: 2, name: 'Domain-driven design' },
      { id: 3, name: 'Building Microservices' },
    ]
    return books.map((book) => 
        axios.post('http://localhost:8080/books', book,
          { headers: { 'Content-Type': 'application/json' } }
        )
    )
  })

  it('Visit the bookish', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="heading"]').contains('Bookish')
  })

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div[data-test="book-list"]').should('exist')

    cy.get('div.book-item').should('have.length', 3)
    cy.get('div.book-item').should((books) => {
      expect(books).to.have.length(3)

      const titles = [...books].map((x) => x.querySelector('.title').innerHTML);
      expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design','Building Microservices']);
    })
  })
})