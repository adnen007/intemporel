import { Component } from '@angular/core';
import { UserBox } from '../../../shared/component/user-box/user-box';
import { ProductBox } from '../../../shared/component/product-box/prodcut-box';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'add-contract-page',
  imports: [UserBox, CommonModule, ProductBox, MatIconModule],
  templateUrl: './add-contract-page.html',
  styleUrl: './add-contract-page.css',
})
export class AddContractPage {
  users = [
    {
      name: 'adnen',
      email: 'adnen@adnen.com',
      number: 14596995,
      location: 'tunis',
      imgUrl: 'images/user.jpg',
    },
    {
      name: 'adnen',
      email: 'adnen@adnen.com',
      number: 14596995,
      location: 'tunis',
      imgUrl: 'images/user.jpg',
    },
    {
      name: 'adnen',
      email: 'adnen@adnen.com',
      number: 14596995,
      location: 'tunis',
      imgUrl: 'images/user.jpg',
    },
    {
      name: 'adnen',
      email: 'adnen@adnen.com',
      number: 14596995,
      location: 'tunis',
      imgUrl: 'images/user.jpg',
    },
    {
      name: 'adnen',
      email: 'adnen@adnen.com',
      number: 14596995,
      location: 'tunis',
      imgUrl: 'images/user.jpg',
    },
    {
      name: 'adnen',
      email: 'adnen@adnen.com',
      number: 14596995,
      location: 'tunis',
      imgUrl: 'images/user.jpg',
    },
    {
      name: 'adnen',
      email: 'adnen@adnen.com',
      number: 14596995,
      location: 'tunis',
      imgUrl: 'images/user.jpg',
    },
    {
      name: 'adnen',
      email: 'adnen@adnen.com',
      number: 14596995,
      location: 'tunis',
      imgUrl: 'images/user.jpg',
    },
    {
      name: 'adnen',
      email: 'adnen@adnen.com',
      number: 14596995,
      location: 'tunis',
      imgUrl: 'images/user.jpg',
    },
  ];

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
