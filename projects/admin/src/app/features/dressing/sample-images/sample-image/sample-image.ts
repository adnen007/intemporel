import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DressingForm } from '../../../../shared/component/dressing-form/dressing-form';
@Component({
  selector: 'app-sample-image',
  imports: [MatIconModule, CommonModule, DressingForm],
  templateUrl: './sample-image.html',
  styleUrl: './sample-image.css',
})
export class SampleImage {
  showMore: boolean = false;

  edit: boolean = false;

  switchShowMore() {
    this.showMore = !this.showMore;
  }

  switchEdit() {
    this.edit = !this.edit;
  }
}
