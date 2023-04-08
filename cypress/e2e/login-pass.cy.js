describe('Автотесты для формы логина и пароля', function () {
    it('1.1 Позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon')
     })
 })
 
 describe('Автотесты для формы логина и пароля', function () {
    it('1.2 Проверка логики восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('ill-natalja-gurova@qa.studio')
         cy.get('#restoreEmailButton').click();
         cy.contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon')
     })
 })

 describe('Автотесты для формы логина и пароля', function () {
    it('1.3 Негативный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru')
         cy.get('#pass').type('iadoreqastudio1')
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon')
     })
 })

 describe('Автотесты для формы логина и пароля', function () {
    it('1.4 Негативный кейс авторизации-2', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@bolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon')
     })
 })

 describe('Автотесты для формы логина и пароля', function () {
    it('1.5 Негативный кейс валидации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();
         cy.contains('Нужно исправить проблему валидации');
     })
 })

 describe('Автотесты для формы логина и пароля', function () {
    it('1.6 Проверка на приведение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon')
     })
 })
