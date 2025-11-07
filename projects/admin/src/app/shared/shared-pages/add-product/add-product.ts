import { Component } from '@angular/core';
import { ProductBox } from '../../../shared/component/product-box/prodcut-box';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, ProductBox, MatIconModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  modes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  categories = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  subCategories = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  products = [
    {
      name: 'Montre Zen',
      mark: 'zen',
      size: 'taille:35',
      price: 128.4,
      imgUrl: 'images/products/product1.jpg',
    },
    {
      name: 'Montre Zen',
      mark: 'zen',
      size: 'taille:35',
      price: 128.4,
      imgUrl: 'images/products/product1.jpg',
    },
    {
      name: 'Montre Zen',
      mark: 'zen',
      size: 'taille:35',
      price: 128.4,
      imgUrl: 'images/products/product1.jpg',
    },
    {
      name: 'Montre Zen',
      mark: 'zen',
      size: 'taille:35',
      price: 128.4,
      imgUrl: 'images/products/product1.jpg',
    },
    {
      name: 'Montre Zen',
      mark: 'zen',
      size: 'taille:35',
      price: 128.4,
      imgUrl: 'images/products/product1.jpg',
    },
    {
      name: 'Montre Zen',
      mark: 'zen',
      size: 'taille:35',
      price: 128.4,
      imgUrl: 'images/products/product1.jpg',
    },
    {
      name: 'Montre Zen',
      mark: 'zen',
      size: 'taille:35',
      price: 128.4,
      imgUrl: 'images/products/product1.jpg',
    },
    {
      name: 'Montre Zen',
      mark: 'zen',
      size: 'taille:35',
      price: 128.4,
      imgUrl: 'images/products/product1.jpg',
    },
    {
      name: 'Montre Zen',
      mark: 'zen',
      size: 'taille:35',
      price: 128.4,
      imgUrl: 'images/products/product1.jpg',
    },
    {
      name: 'Montre Zen',
      mark: 'zen',
      size: 'taille:35',
      price: 128.4,
      imgUrl: 'images/products/product1.jpg',
    },
    {
      name: 'Montre Zen',
      mark: 'zen',
      size: 'taille:35',
      price: 128.4,
      imgUrl: 'images/products/product1.jpg',
    },
    {
      name: 'Montre Zen',
      mark: 'zen',
      size: 'taille:35',
      price: 128.4,
      imgUrl: 'images/products/product1.jpg',
    },
  ];

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
