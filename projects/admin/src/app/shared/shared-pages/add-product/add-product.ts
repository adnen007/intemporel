import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-add-product',
  imports: [CommonModule, MatIconModule, RouterOutlet, RouterLink],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {}
