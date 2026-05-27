import { productsPage, ProductsPage } from '../Pages/productsPage.js';

export function multiProductsFlow(products) {
  products.forEach((productIndex) => {
    productsPage.selectProducts(productIndex);
    productsPage.continueShopping();
  });
}
