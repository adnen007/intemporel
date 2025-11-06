import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banners-toolbar',
  imports: [MatIconModule, CommonModule],
  templateUrl: './banners-toolbar.html',
  styleUrl: './banners-toolbar.css',
})
export class BannersToolbar {
  isFormVisible = false;

  showForm() {
    this.isFormVisible = true;
  }

  hideForm() {
    this.isFormVisible = false;
  }
}
