import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserForm } from '../../../../shared/component/user-form/user-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'admin-toolbar',
  imports: [MatIconModule, UserForm, CommonModule],
  templateUrl: './admin-toolbar.html',
  styleUrl: './admin-toolbar.css',
})
export class AdminToolBar {
  isUserFormVisible = false;

  showUserForm() {
    this.isUserFormVisible = true;
  }

  hideUserForm() {
    this.isUserFormVisible = false;
  }
}
