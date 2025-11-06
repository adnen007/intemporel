import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contract',
  imports: [MatIconModule, CommonModule, RouterLink],
  templateUrl: './contract.html',
  styleUrl: './contract.css',
})
export class Contract {
  showMore: boolean = false;

  switchShowMore() {
    this.showMore = !this.showMore;
  }
}
