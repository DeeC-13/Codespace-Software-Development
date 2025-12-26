describe('calculator', () => {
  beforeEach(() => { 
    cy.visit('http://127.0.0.1:5500/index.html')
  })
  
  
  it('Should display numbers when clicked', () => {
    const numbers = ['6', '7', '8', '9', '0'];
    numbers.forEach(num => {
      cy.get(`[data-number]:contains(${num})`).click();
      cy.get('[data-current-operand]').should('contain', num);
      cy.get('[data-clear]').click(); 
    });
  });
  


  it('Should add 2 numbers correctly', () => {
    cy.get('[data-number]:contains(5)').click();
    cy.get('[data-operation]:contains(+)').click();
    cy.get('[data-number]:contains(3)').click();
    cy.get('[data-equals]').click();
    cy.get('[data-current-operand]').should('have.text', '8');
    
  });
  it('Should subtract 2 numbers correctly',  () =>{
    cy.get('[data-number]:contains(9)').click();
    cy.get('[data-operation]:contains(-)').click();
    cy.get('[data-number]:contains(4)').click();
    cy.get('[data-equals]').click();
    cy.get('[data-current-operand]').should('have.text', '5');
  });

  it('Should multiply 2 numbers correctly', () => {
    cy.get('[data-number]:contains(7)').click();
    cy.get('[data-operation]:contains(X)').click();
    cy.get('[data-number]:contains(6)').click();
    cy.get('[data-equals]').click();
    cy.get('[data-current-operand]').should('have.text', '42');
  });

  it('Should divide 2 numbers correctly', () => {
    cy.get('[data-number]:contains(8)').click();
    cy.get('[data-operation]:contains(÷)').click();
    cy.get('[data-number]:contains(4)').click();
    cy.get('[data-equals]').click();
    cy.get('[data-current-operand]').should('have.text', '2');
  });
});