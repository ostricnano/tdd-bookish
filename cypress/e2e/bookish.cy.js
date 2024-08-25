
describe('Bookish application', () => {
  it('Visit the bookish', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="heading"]').contains('Bookish')
  })
})