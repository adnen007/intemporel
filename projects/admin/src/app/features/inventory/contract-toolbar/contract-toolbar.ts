import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contract-toolbar',
  imports: [MatIconModule, CommonModule, RouterLink],
  templateUrl: './contract-toolbar.html',
  styleUrl: './contract-toolbar.css',
})
export class ContractToolbar {
  isUserFormVisible = false;

  showUserForm() {
    this.isUserFormVisible = true;
  }

  hideUserForm() {
    this.isUserFormVisible = false;
  }
}
