import { Component, inject } from '@angular/core';
import { ProductToolbar } from './product-toolbar/product-toolbar';
import { Product } from './product/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  imports: [ProductToolbar, Product],
  templateUrl: './products-list.html',
  styleUrls: ['./products-list.css'],
})
export class ProductsList {
  router = inject(Router);
  source = '';

  constructor() {
    const nav = this.router.currentNavigation();
    const state = nav?.extras.state as { source?: string } | undefined;

    console.log('state:', state);
    this.source = state?.source ?? '';
  }
}
