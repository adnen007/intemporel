import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  currentImageUrl: string = 'images/products/product1.jpg';

  changeImage(url: string) {
    this.currentImageUrl = url;
  }
}
