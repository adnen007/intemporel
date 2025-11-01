import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-box',
  imports: [],
  templateUrl: './prodcut-box.html',
  styleUrl: './prodcut-box.css',
})
export class ProductBox {
  @Input() product!: { name: string; size: string; price: number; mark: string; imgUrl: string };
}
