import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public dataList = [];

  constructor(private _dataList: DataService) { }

  ngOnInit() {
    this._dataList.getBanners()
      .subscribe(data => this.dataList = data);
  }

  // public slideIndex = 1;
  // showSlides(slideIndex);

  // plusSlides(n) {
  //   this.showSlides(this.slideIndex += n);
  // }

  // currentSlide(n) {
  //   this.showSlides(this.slideIndex = n);
  // }

  // showSlides(n) {
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) { slideIndex = 1 }
  //   if (n < 1) { slideIndex = slides.length }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " active";
  // }

}
