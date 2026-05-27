import { BasePage } from './basePage.js';

export class ProductsPage extends BasePage {
  elements = {
    productCart: '.single-products',
    buttonAddCart: '.btn.btn-default.add-to-cart',
    popUpViewCart: '.text-center > a[href="/view_cart"]',
    btnViewCart: '[href="/view_cart"]',
    btnContinueShopping: 'btn.btn-success.close-modal.btn-block',
  };

  selectProducts(index) {
    this.mouseoverIndex(this.elements.productCart, index);
    this.clickIndex(this.elements.buttonAddCart, index);
  }

  viewCart() {
    this.click(this.elements.popUpViewCart);
  }

  continueShopping() {
    this.click(this.elements.btnContinueShopping);
  }

  addProduct(index) {
    this.selectProducts(index);
    this.viewCart();
  }
}

export const productsPage = new ProductsPage();
