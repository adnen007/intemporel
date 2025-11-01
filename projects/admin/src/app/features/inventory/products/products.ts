import { Component } from '@angular/core';
import { ProductToolbar } from '../product-toolbar/product-toolbar';
import { Product } from '../product/product';

@Component({
  selector: 'app-products',
  imports: [ProductToolbar, Product],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {}
