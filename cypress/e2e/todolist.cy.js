describe('todo-list', () => {
  it('Add, check, delete element', () => {
    cy.visit('https://forhemer.github.io/React-Todo-List/')
    cy.get('.input-text').type('First element')
    cy.get('.input-submit').click()
    cy.get('.input-text').type('Second element')
    cy.get('.input-submit').click()
    cy.get('.input-text').type('Third element')
    cy.get('.input-submit').click()
    cy.get('.TodoItem_item__iFWQW').should('have.length', 3);
    cy.get(':nth-child(1) > .TodoItem_checkbox__Tf0FQ').click()
    cy.get('li:nth-child(1) > span').should('have.css', 'text-decoration', 'line-through solid rgb(89, 89, 89)');
    cy.get(':nth-child(1) > button').click()
    cy.get('.TodoItem_item__iFWQW').should('have.length', 2);
  });

})