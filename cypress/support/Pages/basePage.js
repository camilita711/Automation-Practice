export class BasePage {
    type(selector,data){
        cy.get(selector).type(data)
    }
    click(selector){
        cy.get(selector).click()
    }
    select(selector,value){
        cy.get(selector).select(value)
    }
}

export const basePage = new BasePage()