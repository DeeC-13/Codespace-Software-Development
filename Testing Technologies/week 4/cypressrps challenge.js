describe('Rock Paper Scissors Game', () => {
    beforeEach(() => {
        cy.visit("indexrps.html")
    });

    it('should display game title', () => {
        cy.contains("Make Your Selection").should('be.visible');
    });
  
    it('should have empty result text on page load', () => {
            cy.get('#whoWon').should('have.text', '');
        });
            
    it('should update player text when Rock is clicked', () => {
        cy.contains('Rock').click();
        cy.get('#playerChoice').should('contain.text', 'Player Choice: Rock');
    });

    it('should update player text when Paper is clicked', () => {
        cy.contains('Paper').click();
        cy.get('#playerChoice').should('contain.text', 'Player Choice: Paper');
    });

    it('should update player text when Scissors is clicked', () => {
        cy.contains('Scissors').click();
        cy.get('#playerChoice').should('contain.text', 'Player Choice: Scissors');
    });

    it('should display player choice when button is clicked', () => {
        cy.contains('Rock').click();
        cy.get('#playerChoice').should('contain.text', 'Player Choice: Rock');
    });

    it('should display computer choice when button is clicked', () => {
        cy.contains('Rock').click();
        cy.get('#computerChoice').should('not.be.empty');
    });

    it('should display the result after a player chooses Rock', () => {
        cy.contains('Rock').click();
        cy.get('#whoWon').should('not.be.empty');
    });

    it('should display the result after a player chooses Paper', () => {
        cy.contains('Paper').click();
        cy.get('#whoWon').should('not.be.empty');
    });

    it('should display the result after a player chooses Scissors', () => {
        cy.contains('Scissors').click();
        cy.get('#whoWon').should('not.be.empty');
    });

    it('should display player and computer choice', () => {
      cy.get(".button").click(); 
      cy.get('.button').should('have.length', 3);
      cy.contains('Rock').should('be.visible');
      cy.contains('Paper').should('be.visible');
      cy.contains('Scissors').should('be.visible');
    });
  });