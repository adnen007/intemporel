import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DressingForm } from '../dressing-form/dressing-form';
import { formConfigType } from '../../../models/dressing.model';

@Component({
  selector: 'app-dresssing-toolbar',
  imports: [MatIconModule, CommonModule, DressingForm],
  templateUrl: './dresssing-toolbar.html',
  styleUrl: './dresssing-toolbar.css',
})
export class DresssingToolbar {
  isFormVisible = false;
  @Input() formConfig!: formConfigType;

  showForm() {
    this.isFormVisible = true;
  }

  hideForm() {
    this.isFormVisible = false;
  }
}
