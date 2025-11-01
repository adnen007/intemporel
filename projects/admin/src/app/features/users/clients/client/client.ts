import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UserForm } from '../../../../shared/component/user-form/user-form';

@Component({
  selector: 'client',
  imports: [MatIconModule, CommonModule, UserForm],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client {
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
