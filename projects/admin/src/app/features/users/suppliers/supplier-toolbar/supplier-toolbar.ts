import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { UserForm } from '../../../../shared/component/user-form/user-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-toolbar',
  imports: [MatIconModule, UserForm, CommonModule],
  templateUrl: './supplier-toolbar.html',
  styleUrl: './supplier-toolbar.css',
})
export class SupplierToolbar {
  isUserFormVisible = false;

  showUserForm() {
    this.isUserFormVisible = true;
  }

  hideUserForm() {
    this.isUserFormVisible = false;
  }
}
