export class BasePage {
    type(selector,data){
        cy.get(selector).type(data)
    }

    mouseover(selector){
        cy.get(selector).trigger('mouseover', {force: true})
    }

    click(selector){
        cy.get(selector).click({force: true})
    }

    select(selector,value){
        cy.get(selector).select(value)
    }

    mouseoverIndex(selector, index = 0){
        cy.get(selector).eq(index).trigger('mouseover', {force: true})
    }

    clickIndex(selector, index = 0) {
        cy.get(selector).eq(index).click({force: true})
    }
}

export const basePage = new BasePage()