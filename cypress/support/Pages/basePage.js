export class BasePage {
    type(selector,data){
        cy.get(selector).type(data)
    }
    click(selector){
        cy.get(selector).click()
    }
}

export const basePage = new BasePage()