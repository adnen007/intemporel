import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contract',
  imports: [MatIconModule, CommonModule],
  templateUrl: './contract.html',
  styleUrl: './contract.css',
})
export class Contract {
  showMore: boolean = false;

  switchShowMore() {
    this.showMore = !this.showMore;
  }
}
