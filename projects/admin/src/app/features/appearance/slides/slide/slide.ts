import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AddSlideBanner } from '../../../../shared/component/add-slide-banner/add-slide-banner';
@Component({
  selector: 'app-slide',
  imports: [MatIconModule, CommonModule, AddSlideBanner],
  templateUrl: './slide.html',
  styleUrl: './slide.css',
})
export class Slide {
  showMore: boolean = false;
  isActive: boolean = false;
  showImage: boolean = false;

  edit: boolean = false;

  siwtchShowImage() {
    this.showImage = !this.showImage;
  }
  switchShowMore() {
    this.showMore = !this.showMore;
  }
  switchActive() {
    this.isActive = !this.isActive;
  }
  switchEdit() {
    this.edit = !this.edit;
  }
}
