import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import{Iproduct}from '../Iservice';


@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.css']
})
export class PlpComponent implements OnInit {

  public categoryList = [];
  public productList = [];
  public refList :  any;

  constructor(private _dataList: DataService) { }

  ngOnInit() {
    this._dataList.getCategories()
      .subscribe(data => this.categoryList = data);
      this._dataList.getProducts()
      .subscribe(data => {
        this.productList = data;
        this.refList = data;
      });
  }
  public filterProduct(id){
    this.productList = this.refList.filter((item) => {
      return item.category === id;
    })
  }

}
