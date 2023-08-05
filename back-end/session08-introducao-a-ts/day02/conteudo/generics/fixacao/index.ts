import { ProductType } from "./ProductType";

function getProduct(): ProductType {
  const product = {};
  const productWithBarcode: ProductType = {
    ...product,
    barcode: '123c456b789a',
    price: 20,
  }
  return productWithBarcode;
}

console.log(getProduct());