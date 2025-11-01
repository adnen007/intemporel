import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UserForm } from '../../../../shared/component/user-form/user-form';

@Component({
  selector: 'app-supplier',
  imports: [MatIconModule, CommonModule, UserForm],
  templateUrl: './supplier.html',
  styleUrl: './supplier.css',
})
export class Supplier {
  showMore: boolean = false;
  isActive: boolean = false;
  isUserFormVisible = false;

  showUserForm() {
    this.isUserFormVisible = true;
  }

  hideUserForm() {
    this.isUserFormVisible = false;
  }

  switchActive() {
    this.isActive = !this.isActive;
  }
  switchShowMore() {
    this.showMore = !this.showMore;
  }
}
