/// <reference types="cypress" />

describe('Fetch and Use OTP Token', () => {
    it('should fetch the OTP token and login as superadmin', () => {
        cy.visit('https://qa.bolo.ai/admin/signin/');
        // cy.on('window:alert',  (t) => {
        //    expect(t).to.type('romil');
        //    expect(t).to.type('Romil@123');
        // });
  
    });
});