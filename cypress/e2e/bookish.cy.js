/* eslint-disable no-undef */
import axios from "axios";

describe("Bookish application", () => {
  // before(() =>{
  //   return axios
  //     .delete('http://localhost:8080/books?_cleanup=true')
  //     .catch((err) => err)
  // })

  // afterEach(()=>{
  //   return axios
  //     .delete('http://localhost:8080/books?_cleanup=true')
  //   .catch((err) => err)
  // })

  // beforeEach(()=>{
  //   const books = [
  //     { id: 1, name: 'Refactoring' },
  //     { id: 2, name: 'Domain-driven design' },
  //     { id: 3, name: 'Building Microservices' },
  //   ]
  //   return books.map((book) =>
  //       axios.post('http://localhost:8080/books', book,
  //         { headers: { 'Content-Type': 'application/json' } }
  //       )
  //   )
  // })

  it("Visit the bookish", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-test="heading"]').contains("Bookish");
  });

  it("Shows a book list", () => {
    cy.visit("http://localhost:3000/");
    cy.get('div[data-test="book-list"]').should("exist");

    cy.get("div.book-item").should("have.length", 4);

    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(4);

      const titles = [...books].map((x) => x.querySelector("h2").textContent);
      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven design",
        "Building Microservices",
        "Acceptance Test Driven Development",
      ]);
    });
  });

  it('Goes to the details page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('div.book-item').contains('View Details').eq(0).click();
    cy.url().should('include', '/books/1');
    cy.get('h2').contains('Refactoring');
  })
});
