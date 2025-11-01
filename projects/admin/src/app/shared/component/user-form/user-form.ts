import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-form',
  imports: [],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  @Output() closeForm = new EventEmitter<void>();

  close() {
    this.closeForm.emit();
  }
}
