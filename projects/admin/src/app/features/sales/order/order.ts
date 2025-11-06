import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [MatIconModule, CommonModule, RouterLink],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  showMore: boolean = false;
  isActive: boolean = false;
  isSale: boolean = false;

  switchSale() {
    this.isSale = !this.isSale;
  }
  switchActive() {
    this.isActive = !this.isActive;
  }
  switchShowMore() {
    this.showMore = !this.showMore;
  }
}
