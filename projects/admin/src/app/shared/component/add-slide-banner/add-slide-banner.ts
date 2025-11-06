import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-slide-banner',
  imports: [],
  templateUrl: './add-slide-banner.html',
  styleUrl: './add-slide-banner.css',
})
export class AddSlideBanner {
  @Output() close = new EventEmitter<void>();
  onCloseClick() {
    this.close.emit();
  }
}
