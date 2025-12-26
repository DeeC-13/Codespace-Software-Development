describe('calculator', () => {
  beforeEach(() => { 
    cy.visit('../index.html')
  })
  
  it('all clear button tests', ()=> {
    //tests all clear button exists
    cy.get('[data-clear]').should("exist").should("have.text", "AC").click();
    //tests clear button resets display
    
  })

  it ('equals button tests', ()=> {
  //tests all clear button exists
    cy.get('[data-equals]').should("exist").should("have.text", "=").click();
    //tests clear button resets display
  })

  it('Should display numbers when clicked', () => {
    const numbers = ['1', '2', '3', '4', '5'];
    numbers.forEach(num => {
      cy.get(`[data-number]:contains(${num})`).click();
      cy.get('[data-current-operand]').should('contain', num);
      cy.get('[data-clear]').click(); 
    });
  });

  it ('Should display +/- when clicked', ()=> {
    //test to show a - number for -5+2
      cy.get('[data-number]:contains(5)').click();
      cy.get('[data-toggle-sign]:contains(-)').click();
      cy.get('[data-operation]:contains(+)').click();
      cy.get('[data-number]:contains(2)').click();
      cy.get('[data-equals]').click();
      cy.get('[data-current-operand]').should('have.text', '-3');
  })

  it ('Should display +/- when clicked', ()=> {
    // test for percentage calculation  
      cy.get('[data-number]:contains(1)').click();
      cy.get('[data-number]:contains(2)').click();
      cy.get('[data-percent]').contains("%").click();
      cy.get('[data-equals]').contains("=").click();
      cy.get('[data-current-operand]').should("contain", "0.12");
  })




})  