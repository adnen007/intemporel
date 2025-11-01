import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserForm } from '../../../../shared/component/user-form/user-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'clients-toolbar',
  imports: [MatIconModule, UserForm, CommonModule],
  templateUrl: './clients-tool-bar.html',
  styleUrl: './clients-tool-bar.css',
})
export class ClientsToolBar {
  isUserFormVisible = false;

  showUserForm() {
    this.isUserFormVisible = true;
  }

  hideUserForm() {
    this.isUserFormVisible = false;
  }
}
