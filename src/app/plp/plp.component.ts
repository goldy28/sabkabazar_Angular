import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Iproduct } from '../Iservice';
import{CartserviceService} from '../cartservice.service';


@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.css']
})
export class PlpComponent implements OnInit, OnDestroy {

  public categoryList = [];
  public productList = [];
  public refList: any;
  public productItem = [];
  public counter = 0;
  public countVal;

  constructor(private _dataList: DataService, private cartService:CartserviceService ) { }

  ngOnInit() {
    this._dataList.getCategories()
      .subscribe(data => this.categoryList = data);
    this._dataList.getProducts()
      .subscribe(data => {
        this.productList = data;
        this.refList = data;
        if(this.cartService.selectedProduct) {
          this.filterProduct(this.cartService.selectedProduct);
        }
      });
  }
  public filterProduct(id) {
    this.productList = this.refList.filter((item) => {
      return item.category === id;
    })
  }

   addCartItem(item) {
    this.cartService.addCartItem(item);
    this.productItem.push(item);
    console.log(this.productItem);
    if (typeof (Storage) !== "undefined") {
      this.countVal = this.productItem.length;
      sessionStorage.setItem("product",JSON.stringify(this.productItem));
    }else{
      console.log("issue in session storage")
    }
    // console.log('product', this.productItem,'count: ',this.countVal);
    // this.countVal = this.counter++;
  }
  ngOnDestroy(){
    this.cartService.selectedProduct = '';
  }
  

}
