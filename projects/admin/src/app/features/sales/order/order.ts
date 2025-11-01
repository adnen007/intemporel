import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [MatIconModule, CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  showMore: boolean = false;
  isActive: boolean = false;
  isSale: boolean = false;
  isUserFormVisible = false;

  showUserForm() {
    this.isUserFormVisible = true;
  }

  hideUserForm() {
    this.isUserFormVisible = false;
  }

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
