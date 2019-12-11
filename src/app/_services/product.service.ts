import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../_entities/product';
import { PRODUCTS } from '../_data/product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getAllProduct (): Observable<Product[]>
  {
    return of(PRODUCTS);
  }
  getProductById(id):Observable<Product>
  {
    return of(PRODUCTS.find(item=>item.id==id));
  }
}
