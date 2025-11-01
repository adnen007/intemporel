import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UserForm } from '../../../../shared/component/user-form/user-form';
@Component({
  selector: 'app-admin',
  imports: [MatIconModule, CommonModule, UserForm],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  showMore: boolean = false;
  isUserFormVisible = false;

  showUserForm() {
    this.isUserFormVisible = true;
  }

  hideUserForm() {
    this.isUserFormVisible = false;
  }
  switchShowMore() {
    this.showMore = !this.showMore;
  }
}
