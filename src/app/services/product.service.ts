import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: AngularFireList<any>;
  constructor(
    private firebase:AngularFireDatabase
  ) { }
  getproduct(){
    return this.productList = this.firebase.list('products');
  }
  insertProduct(product: Product){
    this.productList.push({
      name: product.name,
      category:product.category,
      location:product.location,
      price: product.price

    });
  }
}