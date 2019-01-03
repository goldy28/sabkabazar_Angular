import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import{Ibanner,Iproduct,Icategory}from './Iservice';
import { Observable } from '../../node_modules/rxjs';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private bannerUrl:string = 'http://localhost:5000/banners'
  private categoryURL:string = 'http://localhost:5000/categories'
  private productURL:string = 'http://localhost:5000/products'

  constructor(private http: HttpClient) { }

  getBanners():Observable<Ibanner[]>{
    return this.http.get<Ibanner[]>(this.bannerUrl);
    // .catch(this.errorHandler);
  }
  getCategories():Observable<Icategory[]>{
    return this.http.get<Icategory[]>(this.categoryURL);
  }
  getProducts():Observable<Icategory[]>{
    return this.http.get<Icategory[]>(this.productURL);
  }
  // errorHandler(error:HttpErrorResponse){
  //   return Observable.throw(error.message || "Server Error")
  // }
}
