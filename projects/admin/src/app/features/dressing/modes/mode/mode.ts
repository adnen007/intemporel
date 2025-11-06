import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DressingForm } from '../../../../shared/component/dressing-form/dressing-form';
@Component({
  selector: 'app-mode',
  imports: [MatIconModule, CommonModule, DressingForm],
  templateUrl: './mode.html',
  styleUrl: './mode.css',
})
export class Mode {
  showMore: boolean = false;

  edit: boolean = false;

  switchShowMore() {
    this.showMore = !this.showMore;
  }

  switchEdit() {
    this.edit = !this.edit;
  }
}
