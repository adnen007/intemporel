import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AddSlideBanner } from '../../../../shared/component/add-slide-banner/add-slide-banner';

@Component({
  selector: 'app-slides-toolbar',
  imports: [MatIconModule, CommonModule, AddSlideBanner],
  templateUrl: './slides-toolbar.html',
  styleUrl: './slides-toolbar.css',
})
export class SlidesToolbar {
  isFormVisible = false;

  showForm() {
    this.isFormVisible = true;
  }

  hideForm() {
    this.isFormVisible = false;
  }
}
