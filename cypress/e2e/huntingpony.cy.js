
describe('Автотест HuntingPony', function () {
    it('2. Оформление заказа', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('[data-index="7"] > .header__collections-controls > .header__collections-link').click();
         cy.get('.product-preview__img-1').click();
         cy.get('.add-cart-counter__btn').click({force: true});
         cy.get('[data-add-cart-counter-plus=""]').click({force: true});
         cy.get('.header__cart > .icon').click();
         cy.get('.cart-controls > .button').click();
         cy.contains('Оформление заказа'); 
     })
 })