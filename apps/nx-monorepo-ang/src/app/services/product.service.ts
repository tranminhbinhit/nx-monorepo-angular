import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor() { }

  public getProduct() {
    let products: ProductModel [] = [];
    products = [
      { Id: 1, ProductName: 'IP 11 Promax' },
      { Id: 2, ProductName: 'IP 12 Promax' },
      { Id: 3, ProductName: 'IP 13 Promax' },
      { Id: 4, ProductName: 'IP 14 Promax' }
    ];
    return products;
  }
}
