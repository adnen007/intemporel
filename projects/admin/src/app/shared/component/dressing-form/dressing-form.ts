import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DressingFormType } from '../../../models/dressing.model';

@Component({
  selector: 'app-dressing-form',
  imports: [CommonModule],
  templateUrl: './dressing-form.html',
  styleUrl: './dressing-form.css',
})
export class DressingForm {
  @Output() close = new EventEmitter<void>();
  @Input() type!: DressingFormType;
  @Input() name!: string;
  onCloseClick() {
    this.close.emit();
  }
}
