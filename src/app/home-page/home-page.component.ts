import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { CartserviceService } from '../cartservice.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public dataList = [];
  public categoryList = [];

  constructor(private _dataList: DataService, 
            private router: Router
            ,private cartService: CartserviceService) { }

  ngOnInit() {
    this._dataList.getBanners()
      .subscribe(data => this.dataList = data);
    this._dataList.getCategories()
      .subscribe(data => {
      this.categoryList = data.sort((a, b) => a.order - b.order)
        // for (let ctr = 0; ctr < this.categoryList.length; ctr++) {
          
        //   if (ctr % 2 == 0) {
        //     this.categoryList["index"] = true;
        //   }
        //   else {
        //     this.categoryList["index"] = false;
        //   }
        // }
      });
  }

  selectedItem(item) {
    this.cartService.selectedProduct = item;
    this.router.navigate(['/products']);
  }
}
