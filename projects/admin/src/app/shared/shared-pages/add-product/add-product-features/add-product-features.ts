import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product-features',
  imports: [CommonModule],
  templateUrl: './add-product-features.html',
  styleUrl: './add-product-features.css',
})
export class AddProductFeatures {
  sizes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  colors = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  brands = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
}
