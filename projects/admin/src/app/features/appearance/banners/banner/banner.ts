import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AddSlideBanner } from '../../../../shared/component/add-slide-banner/add-slide-banner';
@Component({
  selector: 'app-banner',
  imports: [MatIconModule, CommonModule, AddSlideBanner],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  showMore: boolean = false;
  showImage: boolean = false;

  edit: boolean = false;

  siwtchShowImage() {
    this.showImage = !this.showImage;
  }
  switchShowMore() {
    this.showMore = !this.showMore;
  }

  switchEdit() {
    this.edit = !this.edit;
  }
}
