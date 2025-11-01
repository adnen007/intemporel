import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [MatIconModule, CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  showMore: boolean = false;

  switchShowMore() {
    this.showMore = !this.showMore;
  }
}
