import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product-info',
  imports: [CommonModule],
  templateUrl: './add-product-info.html',
  styleUrl: './add-product-info.css',
})
export class AddProductInfo {
  modes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  categories = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  subCategories = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
}
