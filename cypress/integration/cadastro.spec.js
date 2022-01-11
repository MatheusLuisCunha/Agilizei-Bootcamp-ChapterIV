/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()
 
// Mocha -> Test Runner

//describe, context, it

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadstro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app/');

        //Inputs do tipo Texto
        cy.get('input[name=firstName]').type(chance.first());
        cy.get('input[name=lastName]').type(chance.last());
        cy.get('textarea[name=adress]').type(chance.address());
        cy.get('input[name=emailAdress]').type(chance.email());

        //radiobutton
        cy.get('input[value=n]').check();

        //checkbox
        cy.get('input[type=checkbox]').check('Netflix');
        cy.get('#checkbox3').check('Dormir');

        //combobox / select
        cy.get('select#countries').select('Japão', {force: true});
        cy.get('select#years').select('1900', {force: true});
        cy.get('select#months').select('Novembro', {force: true});
        cy.get('select#days').select('31', {force: true});

        cy.get('input#firstpassword').type('Alunos@2021');
        cy.get('input#secondpassword').type('Alunos@2021')

        cy.get('#submitbtn').click();

        //Asserções
        cy.url().should('contain', 'listagem');
        cy.contains('Agilizei').should('be.visible');

    });
});