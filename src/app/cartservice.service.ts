import { Injectable } from '@angular/core';
import { Observable, Subject } from '../../node_modules/rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  public cartItems= [];
  public ItemCount = new Subject<number>();
  public selectedProduct = '';

  constructor() {
   }
  addCartItem(item){
    this.cartItems.push(item);
    // .catch(this.errorHandler);
  }
}
