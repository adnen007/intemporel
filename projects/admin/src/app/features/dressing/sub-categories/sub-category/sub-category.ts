import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DressingForm } from '../../../../shared/component/dressing-form/dressing-form';
@Component({
  selector: 'app-sub-category',
  imports: [MatIconModule, CommonModule, DressingForm],
  templateUrl: './sub-category.html',
  styleUrl: './sub-category.css',
})
export class SubCategory {
  showMore: boolean = false;

  edit: boolean = false;

  switchShowMore() {
    this.showMore = !this.showMore;
  }

  switchEdit() {
    this.edit = !this.edit;
  }
}
