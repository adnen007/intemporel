import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-toolbar',
  imports: [MatIconModule, CommonModule],
  templateUrl: './product-toolbar.html',
  styleUrl: './product-toolbar.css',
})
export class ProductToolbar {
  @Input() source!: string;
}
