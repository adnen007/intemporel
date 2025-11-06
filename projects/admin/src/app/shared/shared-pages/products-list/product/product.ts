import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [MatIconModule, CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  showMore: boolean = false;
  isPublic: boolean = false;

  switchShowMore() {
    this.showMore = !this.showMore;
  }
  switchPulic() {
    this.isPublic = !this.isPublic;
  }
}
