export default class Login{
    getUserName(){ return cy.get('[id="username"]') }
    getUserPassword(){ return cy.get('[id="password"]') }
    getCheckTitleLoginPage(){ return cy.get('[class="example"] h2') }
    getLoginButton(){ return cy.get('[type="submit"]') }

visitLoginPage(){
   cy.visit(Cypress.env('baseUrl')+"/login") 
}
    userName(username){
     return this.getUserName(username)
    }

    userPassword(password){
     return this.getUserPassword(password)
    }

    checkTitleLoginPage(){
        return this.getCheckTitleLoginPage()
    }

    loginButton(){
        return this.getLoginButton()
    }
}

