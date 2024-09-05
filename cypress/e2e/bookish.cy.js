
/* eslint-disable no-undef */

const gotoApp = () => {
  cy.visit("http://localhost:3000/");
};

const checkAppTitle = () => {
  cy.get('[data-test="heading"]').contains("Bookish");
}

const checkBookListWith = (expectation = []) => {
  cy.get('div[data-test="book-list"]').should("exist");
  cy.get('div.book-item').should((books) => {
    expect(books).to.have.length(expectation.length);
    const titles = [...books]?.map((x) => x.querySelector("h2").textContent);
    expect(titles).to.deep.equal(expectation);
  });
}

const checkSearchedResult = () => {
  checkBookListWith(["Domain-driven design"]);
}

const performSearch = (perform) => {
  cy.get('[data-test="search"] input').type(perform);
}

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
  beforeEach(() => {
    //feedStubBooks();
    gotoApp();
  });

  afterEach(() => {
    //cleanUpStubeBooks();
  });

  it("Visit the bookish", () => {
    gotoApp();
    checkAppTitle();
  });

  it("Shows a book list", () => {
    checkBookListWith([
      "Refactoring",
      "Domain-driven design",
      "Building Microservices",
      "Acceptance Test Driven Development",
    ]);
  });

  it('Goes to the details page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('div.book-item').contains('View Details').eq(0).click();
    cy.url().should('include', '/books/1');
    cy.get('h2').contains('Refactoring');
  })

  it('Searches for a title',() => {
    performSearch('design');
    checkSearchedResult();
  })

});
