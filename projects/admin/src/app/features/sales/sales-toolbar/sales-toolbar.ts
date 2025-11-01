import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sales-toolbar',
  imports: [MatIconModule, CommonModule, RouterLink],
  templateUrl: './sales-toolbar.html',
  styleUrl: './sales-toolbar.css',
})
export class SalesToolbar {
  isUserFormVisible = false;

  showUserForm() {
    this.isUserFormVisible = true;
  }

  hideUserForm() {
    this.isUserFormVisible = false;
  }
}
